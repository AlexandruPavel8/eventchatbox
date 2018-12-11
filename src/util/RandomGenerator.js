import React from 'react';
import { personData, obiectData, statusData } from "../data/exampleData";
import Event from '../component/Event';

export default function getRandomEvent() {  
var randomPerson = personData[Math.floor(Math.random()*personData.length)];
var poza= randomPerson.poza;
var nume=randomPerson.nume;
var obiect=obiectData[Math.floor(Math.random()*obiectData.length)].nume;
var status=statusData[Math.floor(Math.random()*statusData.length)].nume;
return [<Event poza={poza} name={nume} obiect={obiect} status={status} />]
};
