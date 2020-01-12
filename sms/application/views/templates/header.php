<!DOCTYPE html>
<html>
<head>
	<title>BTE | <?= $page_title?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script  src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

	<script src="<?php echo base_url() ?>assets/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="<?php echo base_url() ?>assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php echo base_url() ?>assets/css/bootstrap-theme.css">
	
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	
	<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>assets/css/custom.css">
</head>
<body>

	<nav class="navbar fixed-top">
	  <div class="container-fluid">
	      <div class="navbar-header">
	        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
	          <span class="icon-bar"></span>
	          <span class="icon-bar"></span>
	          <span class="icon-bar"></span> 
	        </button>
	        <a class="navbar-brand" href="<?php echo base_url() ?>"><span class='brand'>BT{<span class="common">E</span></span>}ngineering College</a>
	      </div>
	      <div class="collapse navbar-collapse" id="Navbar">
	        <ul class="nav navbar-nav">
	          <li><a href="<?php echo base_url() ?>">Home</a></li>
	          <li><a href="<?php echo base_url() ?>students/add">Add Student</a></li>
	        </ul>
	      </div>
	    </div>
	</nav>

	<div class="container mainContainer">