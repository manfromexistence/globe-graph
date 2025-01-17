'use client';

import MainChartComp from '../shared';
import { useCountryData } from '@/hooks';
import { useLocale, useTranslations } from 'next-intl';
import useCountryLanguage from '@/hooks/use-country-language';

const PerCapita = () => {
  const {
    isLoading,
    chartData,
    countries,
    setMultipleCountries,
    timeRange,
    setTimeRange,
    setCountries,
    removeCountry,
    removeLastCountry,
    fetchSingleCountryGDPData,
    fetchGDPData,
  } = useCountryData({
    indicator: 'NY.GDP.PCAP.CD',
    countryKey: 'capitaCountries',
    timeRangeKey: 'capitaTimeRange',
  });

  const t = useTranslations('Chart');
  const lang = useLocale();
  useCountryLanguage({ countries, setMultipleCountries, lang });

  return (
    <MainChartComp
      isLoading={isLoading}
      fetchGDPData={fetchGDPData}
      fetchSingleCountryGDPData={fetchSingleCountryGDPData}
      timeRange={timeRange}
      setTimeRange={setTimeRange}
      countries={countries}
      chartData={chartData}
      title={t('capita')}
      toolTipMessage={t('capitaDesc')}
      setCountries={setCountries}
      removeCountry={removeCountry}
      removeLastCountry={removeLastCountry}
      isCurrencySymbol={true}
    />
  );
};

export default PerCapita;
