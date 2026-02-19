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

         //timestamps
         createdAt:v.number(),
         updatedAt:v.number(),}).index("by_token",["tokenIdentifier"]),


         events: defineTable({
            title: v.string(),
            description: v.string(),
            slug: v.string(),

          //Organizer
             organizerId: v.id("users"),
             organizerName: v.string(),
      
          //Event details
             category: v.string(),
             tags: v.array(v.string()),

          //Date and Time
          startDate: v.number(),
          endDate: v.number(),
          timeZone: v.string(),

          //Location
          locationType: v.union(v.literal("physical"), v.literal("online")),
          venue:v.optional(v.string()), 
          address:optional(v.string()),
          city:v.string(),
          state:optional(v.string()),

          //capicity and ticketing
          capicity:v.number(),
          ticketType:v.union(v.literal("free"),v.literal("paid")),
          ticketPrice:optional(v.number()),     //paid at event offline
          registartionCount: v.number(),

         
          // Customization
          coverImage: v.optional(v.string()),
          themeColor: v.optional(v.string()),

          // Timestamps
          createdAt: v.number(),
          updatedAt: v.number(),
         }).index("by_organizer", ["organizerId"])
           .index("by_category", ["category"])
           .index("by_start_date", ["startDate"])
           .index("by_slug", ["slug"])
           .searchIndex("search_title", { searchField: "title" }),



registration: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),

    // Attendee info
    attendeeName: v.string(),
    attendeeEmail: v.string(),

    // QR Code for entry
    qrCode: v.string(), // Unique ID for QR

    // Check-in
    checkedIn: v.boolean(),
    checkedInAt: v.optional(v.number()),

    // Status
    status: v.union(v.literal("confirmed"), v.literal("cancelled")),

    registeredAt: v.number(),
  })
    .index("by_event", ["eventId"])
    .index("by_user", ["userId"])
    .index("by_event_user", ["eventId", "userId"])
    .index("by_qr_code", ["qrCode"]),
         })
   