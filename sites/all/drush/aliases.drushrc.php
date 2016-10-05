<?php

$aliases['dev'] = array(
	'uri'=> 'empowerplay.ccistaging.com',
	'root' => '/home/staging/subdomains/empowerplay/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=> '-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'empower-play.com',
	'root' => '/home/empowerplay/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'empowerplay',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	
);
