
			var audioAS
			var chday
			var list
			var ah
			var am
			var as
			var aw
			var cprint = 0

      setInterval(() => {
        showTime()
      }, 0);

			function showTime () {
				var Sdate = new Date()
				var h = Sdate.getHours() // 0 - 23 
				var m = Sdate.getMinutes() // 0 - 59
				var s = Sdate.getSeconds() // 0 - 59
				var w = Sdate.getDay() //0 - 6 (week)(0=sun,1=mon,6=sat etc.)

				aw = w
				ow = w
				ah = h
				am = m
				as = s

				h = (h < 10) ? "0" + h : h
				m = (m < 10) ? "0" + m : m
				s = (s < 10) ? "0" + s : s

				var time = h + ":" + m + ":" + s + " "
				document.getElementById('showbox').innerText = time

				if (h == 0 && m == 0 && s == 0 && w == 0) { fixtshow() }
				if (h == 0 && m == 0 && s == 0 && w == 6) { fixtshow() }
				if (h == 0 && m == 0 && s == 0 && w == 1) { fixtshow() }


				nextTaskf(ah, am, aw, as)






			}

	
			function fixtshow () {

				var pdate = new Date()
				var sw = pdate.getDay() //0 - 6 (week)(0=sun,1=mon,6=sat etc.)

				pw = sw

			
					list = day_list
				



				for (y = 0; y < list.length; y++) {
					if (list[y][0] < 10) {
						list[y][0] = "0" + list[y][0]
					}
					if (list[y][1] < 10) {
						list[y][1] = "0" + list[y][1]
					}
				}



			}

		

			function alltprint () {
				if (cprint == 0) {
					var pdate = new Date()
					var sw = pdate.getDay() //0 - 6 (week)(0=sun,1=mon,6=sat etc.)

					pw = sw

					if (chday == 0) {
						list = sun_list
					}
					else if (chday == 6) {
						list = sat_list
					}
					else if (pw == 0) {
						list = sun_list
					}
					else if (pw == 6) {
						list = sat_list
					}
					else {
						list = day_list
					}

					var y
					var newText = ""

					for (y = 0; y < list.length; y++) {

						newText += list[y][0] + ":" + list[y][1] + " " + list[y][2] + "<br>"

					}

					document.getElementById("allTask").innerHTML = newText
					//document.write(newText);

					cprint = 1
				} else {
					document.getElementById("allTask").innerHTML = ""
					cprint = 0
				}

			}

			/*for ( i=0; i < totalList; i++ ){
				
				document.getElementById("allTask").innerText = list[i][0]+ ":" + list[i][1] + list[i][2] + "<br>";
					}
				} */

			function nextTaskf (ah, am, aw, as) {

				
					list = day_list
				

				var lenList = list.length
				var ttl = lenList
				var x


				for (x = 0; x < ttl; x++) {

					if (list[x][0] == ah && list[x][1] == am) { audioP(); notifyMe(list[x][2]) }
					if (list[x][0] > ah) {
						document.getElementById("nextTask").innerText =  list[x][0] + ":" + list[x][1] + " " + list[x][2]
						document.getElementById("pastTask").innerText = list[x - 1][0] + ":" + list[x - 1][1] + " " + list[x - 1][2]
						break
					} else if (list[x][0] == ah) {
						if (list[x][1] > am) {
							document.getElementById("nextTask").innerText =  list[x][0] + ":" + list[x][1] + " " + list[x][2] 
							document.getElementById("pastTask").innerText =  list[x - 1][0] + ":" + list[x - 1][1] + " " + list[x - 1][2]
							break
						}
					}
				}
			}

			function audioSelect (selectM) {
				var audioS
				audioS = selectM.getAttribute("data-music-type")
				audioAS = audioS
				var audio = document.getElementById(audioS)
				audio.play()
			}

			function audioDefault () {
				audioAS = "audio0"
			}

			audioDefault()

			function audioP () {
				var audios
				var adate = new Date()
				var vh = adate.getHours() // 0 - 23 
				var vm = adate.getMinutes() // 0 - 59
				var vs = adate.getSeconds() // 0 - 59
				var vw = adate.getDay() //0 - 6 (week)(0=sun,1=mon,6=sat etc.)*/
				audios = audioAS
				if (vs >= 0 && vs < 3) {
					var audio = document.getElementById(audios)
					audio.play()

				}
			}

			function notifyMe (ntTask) {
				var adate = new Date()
				var vh = adate.getHours() // 0 - 23 
				var vm = adate.getMinutes() // 0 - 59
				var vs = adate.getSeconds() // 0 - 59
				var vw = adate.getDay() //0 - 6 (week)(0=sun,1=mon,6=sat etc.)*/

				// Let's check if the browser supports notifications
				if (!("Notification" in window)) {
					alert("This browser does not support desktop notification")
				}

				// Let's check whether notification permissions have already been granted
				else if (Notification.permission === "granted" && vs >= 0 && vs < 1) {
					// If it's okay let's create a notification
					var notification = new Notification(ntTask)
				}

				// Otherwise, we need to ask the user for permission
				else if (Notification.permission !== "denied") {
					Notification.requestPermission().then(function (permission) {
						// If the user accepts, let's create a notification
						if (permission === "granted" && vs >= 0 && vs < 1) {
							var notification = new Notification(ntTask)
						}
					})
				}

				// At last, if the user has denied notifications, and you 
				// want to be respectful there is no need to bother them any more.
			}



	