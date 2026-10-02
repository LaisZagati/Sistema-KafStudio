"use strict";

/*
  KAF Studio — Supabase Authentication
  Handles login, profile and permissions.
*/

let currentUser = null;
let currentProfile = null;
let currentPermissions = [];

/* ---------- LOGIN SCREEN ---------- */

function createLoginScreen() {
  if (document.getElementById("kaf-login")) return;

  const overlay = document.createElement("div");
  overlay.id = "kaf-login";

  overlay.innerHTML = `
    <div class="kaf-login-card">
      <div class="kaf-login-logo">
        <img src="logo.svg" alt="KAF Studio Pilates">
      </div>

      <h1>Bem-vinda ao KAF Studio</h1>
      <p class="kaf-login-subtitle">
        Entre para acessar o sistema de gestão.
      </p>

      <form id="kaf-login-form">

        <label>
          E-mail
          <input
            id="kaf-login-email"
            type="email"
            autocomplete="email"
            placeholder="seu@email.com"
            required
          >
        </label>

        <label>
          Senha
          <input
            id="kaf-login-password"
            type="password"
            autocomplete="current-password"
            placeholder="Sua senha"
            required
          >
        </label>

        <button
          type="submit"
          id="kaf-login-button"
        >
          Entrar
        </button>

        <p id="kaf-login-message" class="kaf-login-message"></p>

      </form>
    </div>
  `;

  document.body.appendChild(overlay);

  document
    .getElementById("kaf-login-form")
    .addEventListener("submit", handleLogin);
}

/* ---------- LOGIN ---------- */

async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("kaf-login-email").value.trim();

  const password = document.getElementById("kaf-login-password").value;

  const button = document.getElementById("kaf-login-button");
  const message = document.getElementById("kaf-login-message");

  button.disabled = true;
  button.textContent = "Entrando...";
  message.textContent = "";

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Erro de login:", error);

    message.textContent = "E-mail ou senha incorretos.";

    button.disabled = false;
    button.textContent = "Entrar";

    return;
  }

  currentUser = data.user;

  await loadUserProfile();

  document.getElementById("kaf-login").remove();

  console.log("KAF Studio — usuário autenticado:", currentUser);
  console.log("KAF Studio — perfil:", currentProfile);
  console.log("KAF Studio — permissões:", currentPermissions);
}

/* ---------- PROFILE ---------- */

async function loadUserProfile() {
  if (!currentUser) return;

  const { data: profile, error: profileError } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", currentUser.id)
    .single();

  if (profileError) {
    console.error("Erro ao carregar perfil:", profileError);

    return;
  }

  currentProfile = profile;

  const { data: permissions, error: permissionsError } = await supabaseClient
    .from("permissions")
    .select("*")
    .eq("user_id", currentUser.id);

  if (permissionsError) {
    console.error("Erro ao carregar permissões:", permissionsError);

    return;
  }

  currentPermissions = permissions || [];
}

/* ---------- SESSION ---------- */

async function initializeAuth() {
  createLoginScreen();

  const {
    data: { session },
    error,
  } = await supabaseClient.auth.getSession();

  if (error) {
    console.error("Erro ao verificar sessão:", error);

    return;
  }

  if (session?.user) {
    currentUser = session.user;

    await loadUserProfile();

    document.getElementById("kaf-login")?.remove();

    console.log("KAF Studio — sessão restaurada:", currentUser);

    console.log("KAF Studio — perfil:", currentProfile);

    console.log("KAF Studio — permissões:", currentPermissions);
  } else {
    console.log("KAF Studio — nenhum usuário autenticado.");
  }
}

/* ---------- AUTH STATE ---------- */

supabaseClient.auth.onAuthStateChange(async (event, session) => {
  console.log("KAF Auth:", event);

  if (event === "SIGNED_OUT") {
    currentUser = null;
    currentProfile = null;
    currentPermissions = [];

    createLoginScreen();
  }

  if (event === "SIGNED_IN" && session?.user) {
    currentUser = session.user;

    await loadUserProfile();

    document.getElementById("kaf-login")?.remove();
  }
});

/* ---------- START ---------- */

initializeAuth();
