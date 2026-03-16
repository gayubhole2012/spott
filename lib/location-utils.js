
import {State,City } from "country-state-city";

export function createLocationSlug(city, state) {
  if (!city || !state) return "";

  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const stateSlug = state.toLowerCase().replace(/\s+/g, "-");

  return `${citySlug}-${stateSlug}`;
}

export function parseLocationSlug(slug) {
  if (!slug || typeof slug !== "string") {
    return { city: null, state: null, isValid: false };
  }

const parts = slug.split("-");
//must have at least 2 parts(city-state)
if(parts.length < 2){
  return {city:null, state:null, isValid:flase};
}

//parse city (first-city)
const cityName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

//parse state (remianing part joined)
const stateName=parts
.slice(1)
.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
.join(" ");

//Get all Canada states
const canadianStates = State.getStatesOfCountry("CA");

//validates state exist
const stateObj = canadianStates.find((s)=>s.name.toLowerCase() === stateName.toLowerCase());
if(!stateObj){
  return {city:null, state:null, isValid:false};
}

//validate city exist in the state
const cities = City.getCitiesOfState("CA",stateObj.isoCode);
//validates state exist
const cityExist = cities.some((c)=>c.name.toLowerCase() === cityName.toLowerCase());
if(!cityExist){
  return {city:null, state:null, isValid:false};
}
return {city: cityName, state: stateName, isvalid:true};
}
