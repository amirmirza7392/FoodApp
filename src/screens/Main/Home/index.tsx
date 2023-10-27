import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import Header from '../../../components/Header';

import Categories from './molecules/Categories';
import Updates from './molecules/Updates';
import Search from './molecules/Search';
import Design from './molecules/Design';

import {timeline} from '../../../utils/constants';
import {metrics} from '../../../utils/metrics';
import {colors} from '../../../utils/colors';

const Home: React.FC = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [filter, setFilter] = useState<any>(timeline);

  const onSearch = (text: string) => {
    setSearch(text);
    if (text.length === 0) {
      setFilter(timeline);
    } else {
      const lowerCaseText = text.toLowerCase();
      const res = timeline?.filter(item =>
        item?.headline?.toLowerCase().includes(lowerCaseText),
      );
      setFilter(res);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Home" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Search value={search} setValue={onSearch} />
        <Design />
        <Categories />
        <Updates array={filter} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: metrics.width(20),
    backgroundColor: colors.white,
  },
  scroll: {
    paddingBottom: metrics.height(110),
    paddingHorizontal: metrics.width(5),
  },
});

export default Home;
