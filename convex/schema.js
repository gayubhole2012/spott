import { defineSchema,defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    //Users table
    users: defineTable({
         name: v.string(),
         tokenIdentifier: v.string(),   //clerk userid for auth
         email: v.string(),
         imageUrl: v.optional(v.string()),


         //onboarding
         hasCompletedOnboarding: v.boolean(),

         location: v.optional(
            v.object({
                city:v.string(),
                state:v.optional(v.string()),
                country:v.string(),
            })
         ),
         interests: v.optional(v.array(v.string())),
         //organizer tracking(User subscription )
         freeEventsCreated: v.number(),      //track free event limit (1 free)

         //timestamops
         createdAt:v.number(),
         updatedAt:v.number(),
}).index("by_token",["tokenIdentifier"]),
    });