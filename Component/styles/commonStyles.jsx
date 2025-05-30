import {Dimensions, StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  bg: {
    backgroundColor: '#E5E5E5',
    height: '100%',
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  boxSize: {
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width * 0.9,
  },
  boxInnerContent: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 8,
    color: 'blue',
  },
  aligncent: {
    alignSelf: 'center',
  },
  notFound: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  mainTitle: {textAlign: 'center', marginBottom: 20, fontSize: 29},
  btn: {
    marginBottom: 4,
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
  },
});

export const contacts = [
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    jobTitle: 'Product Manager',
    phone: '+1 234 567 8901',
  },
  {
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    jobTitle: 'Software Engineer',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Charlie Davis',
    email: 'charlie.d@example.com',
    jobTitle: 'UX Designer',
    phone: '+44 20 7946 0958',
  },
  {
    name: 'Diana Prince',
    email: 'diana.p@example.com',
    jobTitle: 'Marketing Specialist',
    phone: '+61 7 3456 7890',
  },
  {
    name: 'Edward Blake',
    email: 'edward.b@example.com',
    jobTitle: 'Data Analyst',
    phone: '+1 555 123 4567',
  },
  {
    name: 'Fiona Carter',
    email: 'fiona.c@example.com',
    jobTitle: 'HR Manager',
    phone: '+1 321 456 7890',
  },
  {
    name: 'George Mills',
    email: 'george.m@example.com',
    jobTitle: 'Sales Lead',
    phone: '+44 161 123 4567',
  },
];
