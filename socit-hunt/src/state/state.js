// Load saved progress from localStorage (or start fresh)
function loadProgress() {
  const saved = localStorage.getItem("socit-progress");
  return saved ? JSON.parse(saved) : [true, false, false, false, false];
}

export const state = {
  unlocked: loadProgress(),

  unlockClue(number) {
    this.unlocked[number] = true;
    localStorage.setItem("socit-progress", JSON.stringify(this.unlocked));
  },

  isUnlocked(number) {
    return this.unlocked[number];
  },

  reset() {
    this.unlocked = [true, false, false, false, false];
    localStorage.setItem("socit-progress", JSON.stringify(this.unlocked));
  }
};
