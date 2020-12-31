import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../components/constants/colors';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';
import Plans from '../screens/Plans';
import Login from '../screens/Login';
import Profil from '../screens/profil';
import Register from '../screens/Register';
import Api from '../screens/api';


const MainStack = createStackNavigator();
const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<MainStack.Screen name="MainTabs" component={MainTabs} />
			{/* <MainStack.Screen name="Login" component={Login} /> */}
			<MainStack.Screen name="Api" component={Api} />
			{/* <MainStack.Screen name="Register" component={Register} /> */}
			<MainStack.Screen name="Profil" component={Profil} />
			<MainStack.Screen name="Plans" component={Plans} />

		</MainStack.Navigator>
	);
};
const deneme=0;
const Tabs = createBottomTabNavigator();
const MainTabs = () => {

   
			return (
				<Tabs.Navigator
					tabBarOptions={{
						tabStyle: { borderTopWidth: 0 },
						style: { borderTopWidth: 0, borderColor: '#171D32', backgroundColor: '#171D32'},
						activeTintColor: Colors.primary,
					}}
				>
					<Tabs.Screen
						name="Plans"
						component={Plans}
						options={{
							tabBarLabel: ({ focused }) => (
								<TabBarText focused={focused} title="Listem" />
							),
							tabBarIcon: ({ focused }) => (
								<TabBarIcon focused={focused} icon={'md-home'} />
							),
						}}
					/>
					<Tabs.Screen
						name="Api"
						component={Api}
						options={{
							tabBarLabel: ({ focused }) => (
								<TabBarText focused={focused} title="Keşfet" />
							),
							tabBarIcon: ({ focused }) => (
								<TabBarIcon focused={focused} icon={'md-book'} />
							),
						}}
					/>
					<Tabs.Screen
						name="Profil"
						component={Profil}
						options={{
							tabBarLabel: ({ focused }) => (
								<TabBarText focused={focused} title="Profil" />
							),
							tabBarIcon: ({ focused }) => (
								<TabBarIcon focused={focused} icon={'md-person'} />
							),
						}}
					/>

				</Tabs.Navigator>				
			);		  
	
};
const AuthStack = createStackNavigator();
const AuthStackk = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Main" component={Main} />
			<MainStack.Screen name="Register" component={Register} />
		</AuthStack.Navigator>
	);
};
export default () => {
	return (
		<NavigationContainer>
			  <AuthStackk />			
		</NavigationContainer>
	);
};
