alter table "public"."chat_users"
           add constraint "chat_users_chat_id_fkey"
           foreign key ("chat_id")
           references "public"."chat"
           ("id") on update restrict on delete restrict;
