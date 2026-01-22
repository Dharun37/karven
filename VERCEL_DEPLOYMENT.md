# Vercel Deployment Guide

## Environment Variables Setup

To successfully deploy this project on Vercel, you need to add the following environment variables to your Vercel project settings:

### Required Environment Variables

1. **NEXT_PUBLIC_SANITY_PROJECT_ID**
   - Value: `8hjbioqe` (your Sanity project ID)
   - Description: The ID of your Sanity project

2. **NEXT_PUBLIC_SANITY_DATASET**
   - Value: `production`
   - Description: The dataset to use from your Sanity project

3. **NEXT_PUBLIC_SANITY_API_VERSION**
   - Value: `2026-01-17`
   - Description: The Sanity API version to use

### How to Add Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project (karven)
3. Go to **Settings** → **Environment Variables**
4. Add each variable above with its corresponding value
5. Make sure to add them for all environments (Production, Preview, Development)
6. Click **Save**
7. **Redeploy** your application

### Quick Setup Command

Alternatively, you can add all variables at once using the Vercel CLI:

```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
# Enter: 8hjbioqe

vercel env add NEXT_PUBLIC_SANITY_DATASET
# Enter: production

vercel env add NEXT_PUBLIC_SANITY_API_VERSION
# Enter: 2026-01-17
```

### Redeploying After Adding Variables

After adding the environment variables:

1. Go to your project's **Deployments** page
2. Click on the three dots (•••) next to your latest deployment
3. Select **Redeploy**
4. Or simply push a new commit to trigger a new deployment

## Troubleshooting

### Build Errors Related to Sanity

If you see errors like:
- `ReferenceError: client is not defined`
- `Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID`

**Solution**: Make sure all Sanity environment variables are added to Vercel as described above.

### Build Success but Studio Not Working

If the build succeeds but the `/studio` route doesn't work:
- Ensure the environment variables are set for **all environments** (Production, Preview, Development)
- Check that the values match exactly (no extra spaces or quotes)
- Verify your Sanity project is active at https://www.sanity.io/manage

## Current Build Status

The project has been updated to handle missing environment variables more gracefully during the build process. However, for full functionality (especially the Sanity Studio), you must add the environment variables to Vercel.

## Notes

- The blog currently uses static data from `lib/blog-data.ts`
- The Sanity integration is set up for future content management
- Without environment variables, the studio will use placeholder values
