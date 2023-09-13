import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const handleSignOut = async () => {
  const supabase = createClientComponentClient();

  try {
    await supabase.auth.signOut();
    return true;
  } catch (err) {
    console.log(err);
  }
};
