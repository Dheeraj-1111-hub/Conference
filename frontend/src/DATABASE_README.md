# User Database & Authentication System Documentation

## Overview

This document describes the user database and authentication system for the ICISD 2026 Conference registration website.

## File Structure

### 1. **Database Layer** (`src/lib/database.ts`)

The core database module that manages all user data operations.

#### Key Features:

- **Persistent Storage**: Users are stored in `localStorage` for persistence across sessions
- **User Model**:
  ```typescript
  interface User {
    id: string; // Unique user identifier
    email: string; // Email (unique)
    name: string; // Full name
    password: string; // Password (plain text in demo, should be hashed in production)
    createdAt: string; // Account creation timestamp
    registrationCompleted: boolean; // Whether conference registration is done
    lastLogin?: string; // Last login timestamp
  }
  ```

#### Core Methods:

##### `emailExists(email: string): boolean`

Checks if an email is already registered.

```typescript
if (userDatabase.emailExists("user@example.com")) {
  // User exists, show login
} else {
  // New user, show registration
}
```

##### `registerUser(email, name, password): {success, user, error}`

Registers a new user account.

```typescript
const result = userDatabase.registerUser(
  "newuser@example.com",
  "John Doe",
  "password123"
);
if (result.success) {
  console.log("User created:", result.user);
} else {
  console.log("Error:", result.error);
}
```

##### `verifyCredentials(email, password): {success, user, error}`

Validates login credentials and updates last login time.

```typescript
const result = userDatabase.verifyCredentials(
  "user@example.com",
  "password123"
);
if (result.success) {
  // Login successful
  console.log("Welcome back,", result.user.name);
}
```

##### `updateRegistrationStatus(email, completed): boolean`

Marks registration as completed for a user.

```typescript
userDatabase.updateRegistrationStatus("user@example.com", true);
```

##### `getUserRegistrationStatus(email): {registered, completed}`

Gets the registration status of a user.

```typescript
const status = userDatabase.getUserRegistrationStatus("user@example.com");
// Returns: { registered: true, completed: true }
```

#### Test Users (Pre-populated):

```
Email: user@example.com
Name: John Doe
Password: password123

Email: test@icisd.com
Name: Jane Smith
Password: test123
```

---

### 2. **User Service Hook** (`src/hooks/use-user-service.ts`)

React hook for managing authentication state and operations.

#### Hook Usage:

```typescript
const {
  currentUser, // Currently logged-in user
  isLoading, // Loading state during operations
  isLoggedIn, // Boolean: is user authenticated?

  checkEmail, // Check if email exists and registration status
  register, // Register new user
  signIn, // Sign in existing user
  updateRegistrationComplete, // Mark registration as done
  logout, // Logout user
} = useUserService();
```

#### Methods:

##### `checkEmail(email): Promise<{exists, completed}>`

Checks email and returns account status.

```typescript
const { exists, completed } = await userService.checkEmail("user@example.com");
// If exists=true and completed=true, user already finished registration
// If exists=true and completed=false, user needs to complete registration
// If exists=false, new user needs to sign up
```

##### `register(email, name, password, confirmPassword): Promise<AuthResponse>`

Registers a new user.

```typescript
const result = await userService.register(
  "newuser@example.com",
  "Jane Smith",
  "password123",
  "password123"
);
if (result.success) {
  // User registered and logged in
  console.log("New user:", result.user);
}
```

##### `signIn(email, password): Promise<AuthResponse>`

Signs in an existing user.

```typescript
const result = await userService.signIn("user@example.com", "password123");
if (result.success) {
  if (result.shouldRedirectToHome) {
    // User already completed registration, go to home page
    navigate("/");
  } else {
    // User just registered, go to registration page
    navigate("/registration");
  }
}
```

##### `updateRegistrationComplete(email): Promise<boolean>`

Marks user's conference registration as complete.

```typescript
await userService.updateRegistrationComplete("user@example.com");
// Now when user logs in again, they'll be redirected to home page
```

##### `logout()`

Logs out the current user.

```typescript
userService.logout();
// currentUser becomes null
// User is removed from sessionStorage
```

---

### 3. **Authentication Page** (`src/pages/Auth.tsx`)

The complete authentication UI with integrated database.

#### Features:

- **Three-step Flow**:

  1. Email check (determines if existing user or new)
  2. Login form (for existing users)
  3. Registration form (for new users)

- **Smart Redirection**:

  - New user registers → redirects to `/registration`
  - Existing user signs in with completed registration → redirects to home `/`
  - Existing user signs in without completed registration → redirects to `/registration`
  - User already logged in → auto-redirects to `/registration`

- **Loading States**: Buttons show loading spinners during operations
- **Validation**: All inputs are validated before submission

---

## Authentication Flow

### New User Registration:

```
1. User enters email
2. System checks: email doesn't exist
3. Shows registration form
4. User enters name, password, confirm password
5. System creates account and logs user in
6. Redirect to /registration page
7. After registration form completion, updateRegistrationComplete() is called
```

### Existing User Login (First Time):

```
1. User enters email
2. System checks: email exists, registration incomplete
3. Shows login form
4. User enters password
5. System verifies credentials
6. User is logged in
7. Redirect to /registration page (to complete conference registration)
```

### Existing User Login (Already Registered):

```
1. User enters email
2. System checks: email exists, registration complete
3. Shows login form
4. User enters password
5. System verifies credentials
6. User is logged in
7. Redirect to home page / (registration already done)
```

---

## Data Persistence

### localStorage

- **Key**: `icisd_users`
- **Data**: JSON array of all users
- **Automatic**: Saves after every operation
- **Survives**: Browser restart

### sessionStorage

- **Key**: `current_user`
- **Data**: Currently logged-in user details (without password)
- **Automatic**: Set on login, cleared on logout
- **Expires**: When browser tab closes

---

## Security Considerations

### Current Implementation (Development):

- Passwords stored in plain text in localStorage
- No encryption of data
- Suitable for demo/development only

### Production Recommendations:

1. **Backend API**: Move database to backend (Node.js, Python, etc.)
2. **Password Hashing**: Use bcrypt or similar (never store plain text)
3. **JWT Tokens**: Use JWT for session management instead of localStorage
4. **HTTPS**: Always use HTTPS in production
5. **Validation**: Implement server-side validation
6. **Rate Limiting**: Prevent brute force attacks
7. **Email Verification**: Verify email addresses during registration
8. **CORS**: Implement proper CORS policies

---

## Usage Example

### In a React Component:

```typescript
import { useUserService } from "@/hooks/use-user-service";

export function MyComponent() {
  const userService = useUserService();

  if (userService.isLoggedIn) {
    return <div>Welcome, {userService.currentUser?.name}</div>;
  }

  return <div>Please log in</div>;
}
```

### Direct Database Access (for testing/admin):

```typescript
import { userDatabase } from "@/lib/database";

// Get all users
const allUsers = userDatabase.getAllUsers();

// Delete user (testing)
userDatabase.deleteUser("user@example.com");

// Clear all users (testing)
userDatabase.clearAllUsers();
```

---

## Testing

### Test Credentials (Pre-populated):

```
Test User 1:
- Email: user@example.com
- Password: password123
- Registration Status: Complete

Test User 2:
- Email: test@icisd.com
- Password: test123
- Registration Status: Complete
```

### Test Scenarios:

1. **Test New User Registration**:

   - Email: `newuser@test.com`
   - Should go to registration form
   - Should redirect to `/registration` after signup

2. **Test Existing User Login (Registered)**:

   - Email: `user@example.com`
   - Password: `password123`
   - Should redirect to `/` (home page)

3. **Test Already Logged-In User**:

   - Log in first
   - Visit `/auth` page
   - Should auto-redirect to `/registration`

4. **Test Invalid Credentials**:
   - Email: `user@example.com`
   - Password: `wrongpassword`
   - Should show error message

---

## Browser Storage Keys Reference

| Key            | Type           | Content                   | Expires              |
| -------------- | -------------- | ------------------------- | -------------------- |
| `icisd_users`  | localStorage   | Array of all users (JSON) | Never (manual clear) |
| `current_user` | sessionStorage | Current user object       | On tab close         |

---

## Future Enhancements

- [ ] Password reset functionality
- [ ] Email verification
- [ ] Two-factor authentication (2FA)
- [ ] Social login integration (OAuth)
- [ ] User profile management
- [ ] Account deletion
- [ ] Password change/update
- [ ] Login history tracking
- [ ] Admin dashboard
- [ ] User activity logging
- [ ] Session timeout
- [ ] Account lockout after failed attempts

---

## Troubleshooting

### Issue: User data not persisting

**Solution**: Check browser's localStorage is not disabled. Open DevTools → Application → Local Storage → `icisd_users`

### Issue: Cannot sign in with correct credentials

**Solution**: Check password exactly (case-sensitive). Use browser DevTools console: `userDatabase.getAllUsers()`

### Issue: User keeps getting redirected to registration

**Solution**: This is expected for new users or incomplete registrations. Call `userService.updateRegistrationComplete(email)` after registration form submission.

### Issue: "Already signed in" message when trying to access auth page

**Solution**: User is already logged in. Clear session storage: DevTools Console → `sessionStorage.removeItem('current_user')`

---

## Contact & Support

For issues or questions about the authentication system, contact the development team.
