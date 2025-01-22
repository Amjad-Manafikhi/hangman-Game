import React from "react";

export default function chooseRandom() {
  const words = [
    "algorithm", "binary", "compiler", "debug", "encrypt", "function", "variable", "array", "loop", "string",
    "object", "boolean", "integer", "recursion", "syntax", "database", "framework", "frontend", "backend",
    "server", "client", "developer", "programmer", "software", "hardware", "network", "protocol", "execute",
    "compile", "optimize", "iteration", "stack", "queue", "graph", "tree", "hashmap", "dynamic", "static",
    "inheritance", "polymorphism", "encapsulation", "abstraction", "module", "library", "package", "functionality",
    "component", "deployment", "testing", "debugging", "refactor", "pseudocode", "algorithmic", "optimization",
    "problem", "solution", "contest", "runtime", "efficiency", "constraint", "brute", "force", "divide", "conquer",
    "binarysearch", "bitwise", "trie", "segment", "fenwick", "dynamicprogramming", "memoization", "greedy", "dfs",
    "bfs", "complexity", "time", "space", "bigO", "competitive", "coding", "leetcode", "hackerrank", "codeforces",
    "topcoder", "challenges", "rank", "submission", "debugger", "editor", "repository", "versioncontrol", "git",
    "github", "merge", "branch", "pull", "request", "commit", "push", "clone", "fork"
  ];

  // Correct random selection
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

  return randomWord;
}
