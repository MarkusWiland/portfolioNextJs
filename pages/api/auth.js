import { supabase } from "../../utils/supabaseClient";

export default function handler(req, res) {
  console.log("REQ", req);
  console.log("RES", res);
  supabase.auth.api.setAuthCookie(req, res);
}
