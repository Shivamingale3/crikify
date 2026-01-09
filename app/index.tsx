import React, { useEffect, useState } from "react";
import "../global.css";

import { tokenStorage } from "@/constants/secureStorage";
import { Redirect } from "expo-router";

const EntryScreen = () => {
  const [token, setToken] = useState<string | null>(null);
  const getToken = async () => {
    const token = await tokenStorage.getAccessToken();
    setToken(token);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getToken();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return <Redirect href={true ? "/home" : "/(auth)/login"} />;
};

export default EntryScreen;
