function getStoredGame() {
  if (typeof localStorage.gameState === "undefined") return null;
  return JSON.parse(localStorage.gameState);
}

export { getStoredGame }