import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "Empire State Building",
    description: "This is the building",
    imageUrl:
      "https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building-728x546.jpg.webp",
    address:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "2",
    title: "Empire State Building",
    description: "This is the building",
    imageUrl:
      "https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building-728x546.jpg.webp",
    address:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: "u2",
  },
  {
    id: "3",
    title: "Empire State Building",
    description: "This is the building",
    imageUrl:
      "https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building-728x546.jpg.webp",
    address:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: "u3",
  },
];
const Places = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default Places;
