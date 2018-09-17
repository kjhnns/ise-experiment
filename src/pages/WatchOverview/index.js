import React from 'react'
import styled from 'styled-components'

import Product from './Product'
import LoadingProduct from './LoadingProduct'

var products = [
  {
    id: 0,
    name: 'Rolex Everose Gold Daytona Rainbow 116595RBOW',
    price: 208401,
  },
  { id: 1, name: 'Omega Speedy Tuesday Ultraman', price: 7985 },
  { id: 2, name: 'Tudor Black Bay Fifty-Eight', price: 3000 },
  { id: 3, name: 'Rolex GMT-Master II 2018', price: 13990 },
  { id: 4, name: 'Tudor Black Bay GMT Heritage', price: 3449 },
  { id: 5, name: 'Rolex Paul Newman Daytona 6264', price: 350000 },
  {
    id: 6,
    name: 'Omega Speedmaster Apollo 13 Silver Snoopy Award',
    price: 18669,
  },
  { id: 7, name: 'Omega Seamaster Aqua Terra', price: 2804 },
  { id: 8, name: 'Seiko SKX009K2', price: 225 },
  {
    id: 9,
    name: 'Omega Speedmaster Moonwatch Professional "Tintin"',
    price: 4538,
  },
  {
    id: 10,
    name: 'Hublot 2018 FIFA World Cup Big Bang Referee 400.NX.1100.RX',
    price: 5000,
  },
  {
    id: 11,
    name: 'Audemars Piguet Royal Oak Chronograph 25860ST',
    price: 11722,
  },
  { id: 12, name: 'Audemars Piguet Royal Oak 15300ST', price: 13877 },
  { id: 13, name: 'Patek Philippe Nautilus 3800', price: 20796 },
  { id: 14, name: 'Audemars Piguet Royal Oak Extra-Thin', price: 21173 },
  { id: 15, name: 'Rolex Comex Submariner', price: 32996 },
  { id: 16, name: 'Patek Philippe Nautilus', price: 32580 },
  { id: 17, name: 'Audemars Piguet Royal Oak', price: 16751 },
  {
    id: 18,
    name: 'Richard Mille Rafael Nadal NTPT RM 35-01 Carbon',
    price: 121722,
  },
  { id: 19, name: 'Rolex GMT-Master II', price: 8590 },
  { id: 20, name: 'Tudor Submariner 75090', price: 2800 },
  { id: 21, name: 'Rolex GMT-Master II', price: 13719 },
  { id: 22, name: 'Patek Philippe Nautilus', price: 99950 },
  { id: 23, name: 'Omega Speedmaster Moonwatch Speedy Tuesday', price: 6825 },
  {
    id: 24,
    name: 'Tudor Black Bay Harrods Special Edition Heritage',
    price: 4550,
  },
  { id: 25, name: 'Rolex Submariner "Hulk"', price: 8422 },
  { id: 26, name: 'Richard Mille RM010', price: 52954 },
  { id: 27, name: 'Seiko SKX007K2', price: 199 },
  { id: 28, name: 'Rolex Submariner', price: 5079 },
  { id: 29, name: 'Rolex GMT-Master II Fat Lady', price: 6700 },
  { id: 30, name: 'Audemars Piguet Royal Oak 14790', price: 7000 },
  { id: 31, name: 'Omega Seamaster', price: 1215 },
  { id: 32, name: 'Omega Seamaster Planet Ocean 600 M', price: 2399 },
  { id: 33, name: 'Rolex Daytona', price: 11900 },
  { id: 34, name: 'Tudor Big Block 79160', price: 4500 },
  { id: 35, name: 'Nomos Tangente neomatik 41 Update', price: 2449 },
  { id: 36, name: 'Longines Master Collection', price: 1345 },
  { id: 37, name: 'Breitling Superocean Heritage', price: 1900 },
  { id: 38, name: 'Rolex Submariner "Kermit"', price: 8680 },
  { id: 39, name: 'Rolex Cosmograph Daytona 116500LN', price: 15990 },
  { id: 40, name: 'Omega 131.019', price: 450 },
  { id: 41, name: 'Tudor Submariner', price: 4341 },
  { id: 42, name: 'Omega Speedmaster Reduced', price: 1389 },
  {
    id: 43,
    name: 'Omega Speedmaster Moonwatch 311.32.40.30.02.001',
    price: 4999,
  },
  { id: 44, name: 'IWC Chronograph', price: 1790 },
  { id: 45, name: 'IWC Aquatimer IW371918', price: 2518 },
  { id: 46, name: 'Richard Mille RM', price: 140897 },
  { id: 47, name: 'Seiko Divers Automatic Mens Watch SKX007K1', price: 179 },
  { id: 48, name: 'Cartier Tank Solo', price: 1348 },
  { id: 49, name: 'Cartier Tank Vermeil', price: 954 },
  { id: 50, name: 'Omega Speedmaster 3539.50 Automatic', price: 1769 },
  { id: 51, name: 'Omega Seamaster 300m Mid-Size 2561.80.00', price: 1228 },
  { id: 52, name: 'Rolex Submariner Date', price: 4990 },
  { id: 53, name: 'Rolex Daytona', price: 59500 },
  { id: 54, name: 'Omega Seamaster 300 "SPECTRE"', price: 7815 },
  { id: 55, name: 'Rolex Daytona Rainbow Cosmograph', price: 33865 },
  { id: 56, name: 'Breitling Pluton Navitimer 3100 Quartz', price: 750 },
  { id: 57, name: 'Patek Philippe Nautilus 3700', price: 59741 },
  {
    id: 58,
    name: 'Audemars Piguet Royal Oak Offshore Diver Carbon',
    price: 17500,
  },
  { id: 59, name: 'Richard Mille Rafael Nadal', price: 133000 },
  { id: 60, name: 'Rolex GMT-Master II', price: 6500 },
  { id: 61, name: 'Audemars Piguet Royal Oak 15400ST', price: 13108 },
  { id: 62, name: 'Tudor Oysterdate "Big Block"', price: 4200 },
  { id: 63, name: 'Patek Philippe Nautilus Chronograph 5980', price: 51231 },
  {
    id: 64,
    name: 'Tissot Seastar 1000 Powermatic 80 T120.407.17.041.00',
    price: 520,
  },
  { id: 65, name: 'Rolex Sea-Dweller', price: 8247 },
  { id: 66, name: 'Rolex GMT-Master II 126715CHNR', price: 29656 },
  { id: 67, name: 'Breitling Old Navitimer', price: 2343 },
  { id: 68, name: 'Audemars Piguet Royal Oak Jumbo 5402', price: 25000 },
  { id: 69, name: 'Rolex Sea-Dweller Deepsea D-Blue', price: 10291 },
  { id: 70, name: 'Breitling Jupiter Pilot', price: 1299 },
  { id: 71, name: 'Frederique Constant Slim Line', price: 575 },
  { id: 72, name: 'Patek Philippe Nautilus 3710', price: 45700 },
  { id: 73, name: 'Omega Speedmaster Day-Date', price: 2021 },
  {
    id: 74,
    name: 'Audemars Piguet Royal Oak Perpetual Calendar Ceramics',
    price: 11266,
  },
  { id: 75, name: 'Breitling New Pluton Navitimer 3100', price: 738 },
  { id: 76, name: 'Tudor Heritage Black Bay Black', price: 2608 },
  { id: 77, name: 'IWC Ingenieur', price: 3046 },
  { id: 78, name: 'Rolex GMT-Master II', price: 6338 },
  { id: 79, name: 'Omega Speedmaster Apollo 11 35th Anniversary', price: 8070 },
  {
    id: 80,
    name: 'Jaeger-LeCoultre Tribute to 1931 Reverso Ultra Thin Grande',
    price: 3885,
  },
  { id: 81, name: 'Omega Seamaster 600', price: 702 },
  { id: 82, name: 'Audemars Piguet Royal Oak', price: 14250 },
  { id: 83, name: 'Rolex Explorer', price: 12590 },
  { id: 84, name: 'Seiko Pogue Chronograph', price: 550 },
  { id: 85, name: 'Rolex Explorer', price: 3429 },
  {
    id: 86,
    name: 'Audemars Piguet Royal Oak Chronograph 26230ST',
    price: 16064,
  },
  { id: 87, name: 'Tudor Submariner', price: 3850 },
  { id: 88, name: 'Rolex Submariner', price: 23133 },
  { id: 89, name: 'Omega Speedmaster', price: 1450 },
  {
    id: 90,
    name: 'Patek Philippe Nautilus Moonphase Power Reserve 5712',
    price: 33980,
  },
  { id: 91, name: 'Patek Philippe Aquanaut 5167', price: 21274 },
  { id: 92, name: 'Rolex Explorer II', price: 14679 },
  {
    id: 93,
    name: 'Patek Philippe Nautilus 40th Anniversary 5976/1G',
    price: 175000,
  },
  { id: 94, name: 'Omega Seamaster', price: 2019 },
  { id: 95, name: 'Omega Speedmaster Day-Date', price: 1799 },
  { id: 96, name: 'Rolex GMT Master II', price: 12156 },
  { id: 97, name: 'Rolex Daytona', price: 22500 },
  { id: 98, name: 'Omega Speedmaster Apollo Soyuz', price: 8600 },
  { id: 99, name: 'Omega Seamaster Planet Ocean', price: 2344 },
  { id: 100, name: 'Rolex Daytona', price: 53000 },
  { id: 101, name: 'Audemars Piguet Royal Oak 15450ST', price: 12069 },
  { id: 102, name: 'Omega Speedmaster Snoopy', price: 8553 },
  { id: 103, name: 'Breitling Navitimer 92', price: 2509 },
  { id: 104, name: 'Tudor Oysterdate "Big Block"', price: 3800 },
//   { id: 105, name: 'Omega Speedmaster', price: 2462 },
//   { id: 106, name: 'Seiko Grand Seiko Hi-Beat SBGH001 36000', price: 2833 },
//   { id: 107, name: 'Nomos Ludwig neomatik 41 Datum', price: 2499 },
//   { id: 108, name: 'Rolex Submariner Date', price: 5817 },
//   { id: 109, name: 'Tudor Mini-Sub', price: 1823 },
//   { id: 110, name: 'Tudor Heritage Black Bay', price: 2025 },
//   {
//     id: 111,
//     name: 'Omega Speedmaster Moonwatch "First Omega in Space"',
//     price: 2608,
//   },
//   { id: 112, name: 'Tudor Heritage Black Bay', price: 1950 },
//   {
//     id: 113,
//     name: 'Audemars Piguet Royal Oak Offshore Chronograph',
//     price: 10990,
//   },
//   { id: 114, name: 'Rolex Daytona', price: 9334 },
//   { id: 115, name: 'Rolex Yacht-Master Steel', price: 5799 },
//   { id: 116, name: 'Nomos Tangente', price: 890 },
//   { id: 117, name: 'Vacheron Constantin Overseas Chronograph', price: 6512 },
//   { id: 118, name: 'Rolex Daytona Platinum', price: 99500 },
//   { id: 119, name: 'Omega Geneve', price: 493 },
//   {
//     id: 120,
//     name: 'Audemars Piguet Royal Oak Offshore Chronograph',
//     price: 9551,
//   },
//   { id: 121, name: 'Rolex Day-Date', price: 6074 },
//   { id: 123, name: 'Rolex Sea-Dweller Deepsea D-Blue', price: 10500 },
//   { id: 124, name: 'Jaeger-LeCoultre Reverso Grande Date', price: 5687 },
//   { id: 128, name: 'Rolex Datejust', price: 2257 },
//   { id: 129, name: 'Omega Seamaster Diver 300 M', price: 2035 },
//   { id: 130, name: 'Rolex Daytona', price: 8596 },
//   { id: 131, name: 'Sinn U1', price: 1443 },
//   { id: 132, name: 'Rolex Explorer II 42mm', price: 5599 },
//   { id: 133, name: 'Rolex GMT-Master II', price: 5470 },
//   { id: 134, name: 'Tudor Submariner', price: 1650 },
//   { id: 135, name: 'Rolex Explorer II', price: 6800 },
//   {
//     id: 136,
//     name: 'Omega Seamaster Planet Ocean Quantum of Solace',
//     price: 3454,
//   },
//   { id: 137, name: 'Omega Speedmaster Date Steel Automatic', price: 1395 },
//   {
//     id: 138,
//     name: 'Rolex Everose Gold Daytona Rainbow 116595RBOW',
//     price: 208401,
//   },
]

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
  background: #f2f4f5;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1250px;
  padding: 0;
  margin: 0;
  justify-content: center;
`

var loadingDummies = Array.apply(null, { length: 50 })

export default props => (
  <Body>
    <Wrapper>
      {products.map(product => (
        <Product key={product.id} info={product} />
      ))}
      {loadingDummies.map(a => (
        <LoadingProduct />
      ))}
    </Wrapper>
  </Body>
)
