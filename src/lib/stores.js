import { writable } from "svelte/store";

export let servicesStore = writable({
  "Dry Clean": false,
  "Wash & Fold": false,
  "Wash & Iron": false,
  "Premium Laundry": false,
  "Shoe Cleaning": false,
  "Steam Press": false,
  Starching: false,
  Date: undefined,
});
