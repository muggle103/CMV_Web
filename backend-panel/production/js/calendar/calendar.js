function setStyle(id, style, value)
{
  id.style[style] = value;
}
function opacity(el, opacity)
{
  setStyle(el, "filter:", "alpha(opacity=)"+opacity+")");
  setStyle(el, "-moz-opacity", opacity/100);
  setStyle(el, "-khtml-opacity", opacity/100);
  setStyle(el, "opacity", opacity/100);
}
function calendar()
{
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getYear();
  if(year<=200)
  {
    year += 1900;
  }
  months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  days_in_month = new Array(/*January*/31, /*February*/28, /*March*/31, /*April*/30, /*May*/31, /*June*/30, /*July*/31, /*August*/31, /*September*/30, /*October*/31, /*November*/30,/*December*/31);
  if(year%4 == 0 && year!=1900)
  {
    days_in_month[1]=29;
  }
  total = days_in_month[month];
  var date_today = day+ ' '+months[month]+' '+year;
  beg_j = date;
  beg_j.setDate(1);
  if(beg_j.getDate()==2)
  {
    document.write('<td class"cal_days_bef_aft">'+(days_in_month[month-1]-beg_j+i)+'</td>');
    week++;
  }
  for(i=1; i<=total; i++)
  {
    if(week==0)
    {
      document.write('<tr>')
    }
    if(day==i)
    {
      document.write('<td> class="cal_today">'+i+'</td>');
    }
    else
    {
      document.write('<td>'+i+'</td>');
    }
    week++;
    if(week==7)
    {
      document.write('</tr>');
      week=0;
    }
  }
  document.write('</tbody></table>');
  opacity(document.getElementById('cal_body'), 70);
  return true;
}
