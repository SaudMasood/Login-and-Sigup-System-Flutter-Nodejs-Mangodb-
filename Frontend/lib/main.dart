import 'package:flutter/material.dart';
import 'package:loginsigupbackend/screens/login_screen.dart';
import 'package:loginsigupbackend/screens/signup_screen.dart';
import 'screens/signup_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {

    return const MaterialApp(

      debugShowCheckedModeBanner: false,

      home: LoginScreen(),

    );

  }

}