alter table "public"."message"
           add constraint "message_chat_id_fkey"
           foreign key ("chat_id")
           references "public"."chat"
           ("id") on update restrict on delete restrict;
