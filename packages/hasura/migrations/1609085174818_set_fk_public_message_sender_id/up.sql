alter table "public"."message"
           add constraint "message_sender_id_fkey"
           foreign key ("sender_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;
