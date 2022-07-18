## Calendar app

When the app is initially loaded (or refreshed), a simple welcome screen with a login button is shown.
Clicking the login button displays a login popup (courtesy of google) where the user needs to select the account to be used with the app.
If the app says that it is in test mode, please get in touch so I can whitelist your e-mail for app usage.

Once logged in, you can do several things:

1. logout by clicking the button on top,
2. view the events in your calendar in a daily (1, or 7 days - the default), or weekly (30 days) view,
3. add events to your calendar,
4. delete events in your calendar

NOTE: since `React.StrictMode` renders everything twice (mount -> unmount -> mount), the initial render (after login) causes two identical API requests (the same `useEffect` is called twice).

### env vars

In order to use the application, some env variables need to be set (`.env.example` is somewhat of a reference)

- `REACT_APP_GOOGLE_CLIENT_ID` - the google client id used to obtain credentials
- `REACT_APP_GOOGLE_CALENDAR_ID` - the id of the calendar which will be used in the app (e.g. `primary`)
- `REACT_APP_GOOGLE_API_SCOPE` - the scope used when making api requests (e.g. `https://www.googleapis.com/auth/calendar.events`)

### Linting

`yarn lint` (with auto-fixing)

### Testing

`yarn test`
