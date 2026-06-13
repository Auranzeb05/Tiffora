# Tiffora

Role-based enterprise operations platform built to automate kitchen scaling, wallet ledgering, and multi-route delivery logistics for 5,000+ daily meal subscriptions.

## Workspace

- `/client`: React boilerplate with role-guarded routes for customer dashboards and admin analytics hubs.
- `/server`: Node.js + Express boilerplate with layered folders for models, controllers, routes, middleware, tasks, and utilities.

## Backend core stubs

- **Cancellation lock middleware**: Enforces 1-day prior cancellation rule with a strict cutoff of **18:00 on the previous day**.
- **Mongoose models**: `User` (`customer`/`admin` roles), `Wallet` (prepaid ledger balance), and `Order`.
- **Admin dispatch utility**: Groups submitted customer addresses by `pincode` and `sector` for delivery manifests.
- **Background task skeleton**: Midnight cron stub for freezing subscriptions and compiling the Master Kitchen Cooking Manifest.
