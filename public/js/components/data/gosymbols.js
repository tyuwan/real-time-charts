import React from 'react';

const stockSymbs = [ 'AAPL','YHOO','MSFT','SNE','GOOG',
  'AMZN','OILD','AEIS','AMD','ALGN','APEI','ASML','ASTE','ALOT','ATRI','ADRE','BMCH','BRKS','CA',
  'CPLA','CARO','CASY','CBNK','CSCO','CVLT','CYBE','CYNO','CYRN','DLTR','DORM','EBAY','FNTCW','FFBC','THFF','SKYY','FEX',
  'FTC','FTA','FAB','TDIV','QTEC','FYX','FIVE','FELE','GRMN','GENC','GNTX','SOCL','GDEN','GBDC','IESC','IPAR',
  'SOXX','JKHY','JSMD','KEQU','KLAC','LKFN','LRCX','LXRX','LGIH','LSXMB','LSXMA','LLTC','LITE','MGIC','MBFI','MGPI','MCHP',
  'MKSI','MPWR','NANO','NGHCZ','NATL','NTES','NVEE','NVDA','OCLR','ORLY','PDFS','PEBO','PEBK','PRFT','POWI','PSCI','PSCT',
  'PSEC','PROV','QCRH','RAVN','ROST','SMTC','SIRI','JSM','OKSB','SPAR','TXN','SPNC','UBNT','UFPI','VTWV','VASC','CFO','CFA',
  'CDL','FLAG' ].sort();
const nyse = [ 'ACM','AKS','AMBR','ARMK','BANC','BSBR','BAX','BHL','BERY','LND','BR','CAT','IGR','CIM','MJN','MSCI','MUSA','NCI',
  'NXRT','NTC','NEV','PCI','PHK','RCS','PPX','PLD','PRH','TLK','PSA','CTY',
  'CTAA','RFT','SAP','AOS','SWK','EDF','SRI','BLD','TTC','TDG','UTX','WCN','WFC' ].sort();



module.exports = (usedItms) => {
    const nasdaqOptions = stockSymbs.map((symbs, ii) => {
      if(usedItms.test(symbs)){
        return null;
      }else{
       return  <option key={symbs} value={symbs} >{symbs}</option>;
      }
    });
    const nyseOptions = nyse.map((symbs, ii) => {
       if(usedItms.test(symbs)){
      //  return  <option key={symbs} disabled="true" value={symbs} >{symbs}</option>;
      return null;
      }else{
        return  <option key={symbs} value={symbs} >{symbs}</option>;
      }
    });

   const exchangeOpts = {
      NASDAQ: nasdaqOptions,
      NYSE: nyseOptions
    }
    return exchangeOpts;
  }
