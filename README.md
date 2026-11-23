# EVS Fitness Studio — Premium multi-page website

A responsive Next.js App Router website concept for EVS Fitness Studio, Tindivanam.

## Stack
- Next.js 16.4.6
- React 19.3.1
- TypeScript
- Redux Toolkit + RTK Query foundation
- Custom responsive CSS
- Lucide icons

## Pages
- `/` — Home
- `/programs` — Training programs
- `/membership` — Membership enquiry
- `/gallery` — Studio gallery
- `/contact` — Contact and WhatsApp enquiry

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## API integration later
Redux Toolkit and RTK Query are configured in:
- `src/lib/store.ts`
- `src/lib/features/api/apiSlice.ts`
- `src/components/StoreProvider.tsx`

Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` when the backend is ready. Extend `apiSlice.ts` with the real endpoints and types. The current enquiry form intentionally opens WhatsApp and does not persist data.

## Client verification required
The website uses the business details visible in the supplied screenshots:
- Business: EVS Fitness Studio A/C
- Phone: +91 63697 30824
- Email: evsfitnessstudio@gmail.com
- Location: Tindivanam, Tamil Nadu, India
- Timings shown: 5:00–10:00 AM and 4:30–9:30 PM

Confirm the exact street address, weekly closing day, membership prices, offer validity, trainer credentials, class schedule and social profile URLs with the owner before publishing. The supplied image is a collage; gallery tiles are crops from the shared reference, not original high-resolution photography. Replace with original gym photos for production.

## Notes
- Five separate routes; this is not a single-page landing-only build.
- Contact CTA and floating WhatsApp link use the phone number shown in the business screenshot.
- No fabricated membership prices or fitness/medical claims have been added.
- Check official package releases before deployment; versions are pinned in `package.json`.
# evsfitness
