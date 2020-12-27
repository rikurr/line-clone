alter table "public"."chat_users"
           add constraint "chat_users_user_id_fkey"
           foreign key ("user_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;
