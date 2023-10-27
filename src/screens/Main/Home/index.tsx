import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import Header from '../../../components/Header';

import Categories from './molecules/Categories';
import Updates from './molecules/Updates';
import Search from './molecules/Search';
import Design from './molecules/Design';

import {metrics} from '../../../utils/metrics';
import {colors} from '../../../utils/colors';

const Home: React.FC = () => {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Home" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Search value={search} setValue={setSearch} />
        <Design />
        <Categories />
        <Updates />
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
