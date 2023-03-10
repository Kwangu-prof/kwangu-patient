import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Colors from '../Utils/Colors';
import Heading from './Typography/Heading';
import Icon from './icons/icon';
import { AuthContext } from '../store/Context/auth-context';

export interface Iprops {
  heading: string;
  subtitle?: string;
}

const styles = StyleSheet.create({
  headerContainer: {
    // marginBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'helveticaMedium',
    fontSize: 18,
    lineHeight: 27,
  },
  highlightText: {
    fontFamily: 'helvetica',
    color: Colors.gray,
    fontSize: 16,
    lineHeight: 24,
  },
  menu: {
    flexDirection: 'row',
    marginVertical: 5,
    // backgroundColor: 'red',
    // width: '100%',
    paddingRight: 100,
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    fontFamily: 'helveticaMedium',
    fontSize: 16,
  },
});

const ScreenHeader: React.FunctionComponent<Iprops> = ({
  heading,
  subtitle,
}) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.innerContainer}>
        <Heading heading={heading} />
        <Menu style={{ alignItems: 'flex-end' }}>
          <MenuTrigger>
            <SimpleLineIcons name="settings" size={24} color="black" />
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={{
              marginTop: 40,
              alignItems: 'flex-start',
              padding: 5,
              flex: 1,
              // backgroundColor: 'blue',
            }}
          >
            <MenuOption style={styles.menu} onSelect={() => alert(`help`)}>
              <AntDesign name="questioncircleo" size={14} color="black" />
              <Text style={styles.menuText}>Help</Text>
            </MenuOption>
            <MenuOption style={styles.menu} onSelect={() => alert(`about`)}>
              <AntDesign name="infocirlceo" size={14} color="black" />
              <Text style={styles.menuText}>About App</Text>
            </MenuOption>
            <MenuOption style={styles.menu} onSelect={() => logout()}>
              <AntDesign name="logout" size={14} color="black" />
              <Text style={styles.menuText}>Logout</Text>
            </MenuOption>
          </MenuOptions>

          {/* </View> */}
        </Menu>
      </View>
      <Text style={styles.highlightText}>{subtitle}</Text>
    </View>
  );
};

export default ScreenHeader;
