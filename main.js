
function time_converter(time) {
  let hour;
  let minute;

  if (time.length == 4) {
    hour = time.slice(0,1);
    minute = time.slice(2,4);
  } else if (time.length == 5) {
    hour = time.slice(0,2);
    minute = time.slice(3,5);
  }

  const converted = 60 * parseInt(hour) + parseInt(minute);
  return converted;
}

function isha_length(fajr, isha, midnight) {
  const til_midnight = midnight - isha;
  const night_length = til_midnight + fajr;
  const halfnight = night_length / 2;
  return isha + halfnight;
}

function time_form(time) {
  const converted = time.toString();
  let hour = Math.trunc(time / 60);
  let minute = Math.round((time / 60 - hour) * 60);

  if (hour > 12){
    hour -= 12;
  }
  if (minute < 10) {
    minute = "0" + minute.toString();
  }
  const end_time = hour.toString() + ":" + minute.toString();
  return end_time;
}

function get_time(hour, minute){
  const time = hour + ":" + minute;
  return time;
}

function daytime(time) {
  let hour;

  if (time.length == 4) {
    hour = parseInt(time.slice(0,1));
  } else if (time.length == 5) {
    hour = parseInt(time.slice(0,2));
  }

  if (hour >= 6 && hour <= 11){
    return "pm";
  } else {
    return "am";
  }
}

function get_variables() {
  const fajr_hour = document.getElementById("fajr_hour").value;
  const fajr_minute = document.getElementById("fajr_minute").value;
  const isha_hour = document.getElementById("isha_hour").value;
  const isha_minute = document.getElementById("isha_minute").value;

  const fajr_time = get_time(fajr_hour, fajr_minute);
  const isha_time = get_time(isha_hour, isha_minute);


  const converted_fajr = time_converter(fajr_time);
  const converted_isha = time_converter(isha_time);
  const midnight = time_converter("12:00");
  const halfway = isha_length(converted_fajr, converted_isha, midnight);
  const end_time = time_form(halfway);
  const time_day = daytime(end_time);
  document.getElementById("demo").innerHTML = "The end time for Isha is " + end_time + time_day + ".";
  
}







