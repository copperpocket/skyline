var level_ele = document.getElementById("current_level");
var level = level_ele.innerHTML;
var level_num = level[level.length - 1];
var c = document.getElementById("container");
var r = document.getElementById("row_info");
var total_div = document.getElementById("total_vehicles");
var total = returnTotal();
total_div.innerHTML = total;
var master = {};
var check = "goahead";

createListeners();

// Close all dropdowns if clicked anywhere outside the expanding buttons
window.onclick = function(event) {
    var matches = event.target.matches ? event.target.matches('.nav_button') || event.target.matches('.levels_menu') : event.target.msMatchesSelector('.nav_button') || event.target.msMatchesSelector('.levels_menu');
    if(!matches) {
        closeDropdowns();
    }
}

function closeDropdowns() {
    var dropdowns = document.querySelectorAll(".dropdown_content",".levels_content");
    var i;
    var open_dropwon;
    for(i = 0; i < dropdowns.length; i++) {
        open_dropdown = dropdowns[i];
        if(open_dropdown.classList.contains("show")) {
            open_dropdown.classList.remove("show");
        } else if(open_dropdown.classList.contains("show_levels")) {
            open_dropdown.classList.remove("show_levels");
        }
    }
}

function expandNorth() {
    closeDropdowns();
    document.getElementById("north_content").classList.toggle("show");
}

function expandSouth() {
    closeDropdowns();
    document.getElementById("south_content").classList.toggle("show");
}

function expandMenu() {
    closeDropdowns();
    document.getElementById("menu_content").classList.toggle("show");
}

function expandLevels() {
    document.getElementById("levels_content").classList.toggle("show_levels");
}

function selectLevel(l) {
    var row_info = r.innerHTML;

    level_ele.innerHTML = l;
    level = level_ele.innerHTML;
    level_num = level[level.length-1];
    c.innerHTML = "Loading level...";
    // setTimeout(createRow,500,returnRow(row[0]+row[row.length-1]),row);
    createRow(returnRow(row_info[0]+row_info[row_info.length-1]),row_info);
}

function createListeners() {
    button1.addEventListener("click", function() {
        expandNorth();
    });
    button2.addEventListener("click", function() {
        expandMenu();
    });
    button3.addEventListener("click", function() {
        expandSouth();
    });
// Individual row listeners --- North Ramp ---------------
    north_a.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("NA"),"North A");
        createRow(returnRow("NA"), "North A");
    });
    north_b.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("NB"),"North B");
        createRow(returnRow("NB"), "North B");
    });
    north_c.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("NC"),"North C");
        createRow(returnRow("NC"), "North C");
    });
    north_d.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("ND"),"North D");
        createRow(returnRow("ND"), "North D");
    });
    north_i_a.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("NIA"),"North I-A");
        createRow(returnRow("NIA"), "North I-A");
    });
    north_i_b.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("NIB"),"North I-B");
        createRow(returnRow("NIB"), "North I-B");
    });
    north_w.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("NW"),"North W");
        createRow(returnRow("NW"), "North W");
    });
    north_e.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("NE"),"North E");
        createRow(returnRow("NE"), "North E");
    });
// Individual row listeners --- SOUTH Ramp ---------------------
    south_a.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("SA"),"South A");
        createRow(returnRow("SA"), "South A");
    });
    south_b.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("SB"),"South B");
        createRow(returnRow("SB"), "South B");
    });
    south_i_a.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("SIA"),"South I-A");
        createRow(returnRow("SIA"), "South I-A");
    });
    south_i_b.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("SIB"),"South I-B");
        createRow(returnRow("SIB"), "South I-B");
    });
    south_w.addEventListener("click", function() {
        c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("SW"),"South W");
        createRow(returnRow("SW"), "South W");
    });
    south_e.addEventListener("click", function() {
        // c.innerHTML = "Loading row...";
        // setTimeout(createRow,500,returnRow("SE"),"South E");
        // createRow(returnRow("SE"), "South E");
        localStorage.clear();
    });

// Menu listeners
    save_vehicles.addEventListener("click", function() {
        var flag;
        flag = prompt("Please ignore this button, your vehicles are saved automatically.");
        if(flag === check) {
            saveToFile();
        }
    });
    create_vehicles.addEventListener("click", function() {
        createForm();
    });
    retrieve_master.addEventListener("click", function() {
        var confirmation = confirm("Are you sure you would like to retrieve the master file?\n\n"
        + "This will delete your local save and use the save located on my server.\n\n"
        + "WARNING: THIS ACTION CANNOT BE UNDONE");
        if(confirmation === true) {
            retrieveMaster();
        } 
    })
    levels.addEventListener("click", function() {
        expandLevels();
    });

    level1.addEventListener("click", function() {
        selectLevel("Level 1");
    });

    level2.addEventListener("click", function() {
        selectLevel("Level 2");
    });

    level3.addEventListener("click", function() {
        selectLevel("Level 3");
    });

    level4.addEventListener("click", function() {
        selectLevel("Level 4");
    });

    level5.addEventListener("click", function() {
        selectLevel("Level 5");
    });

    misc.addEventListener("click", function() {
        selectLevel("Misc.");
    });
}

function createForm() {
    c.innerHTML = "";
    // r.innerHTML = "";
    total_div.innerHTML = "";

    var f = document.createElement("FORM");
    f.id = "vehicle_form";

    var space = document.createElement("input");
    space.setAttribute("type","text");
    space.setAttribute("id","space_input");
    space.setAttribute("class","vehicle_input");
    var space_label = document.createElement("LABEL");
    var space_text = document.createTextNode("Space: ");
    space_label.setAttribute("for","space_input");
    space_label.appendChild(space_text);
    f.appendChild(space_label);

    var color = document.createElement("input");
    color.setAttribute("type","text");
    color.setAttribute("id","color_input");
    color.setAttribute("class","vehicle_input");
    var color_label = document.createElement("LABEL");
    var color_text = document.createTextNode("Color: ");
    color_label.setAttribute("for","color_input");
    color_label.appendChild(color_text);
    f.appendChild(color_label);

    var plate = document.createElement("input");
    plate.setAttribute("type","text");
    plate.setAttribute("id","plate_input");
    plate.setAttribute("class","vehicle_input");
    var plate_label = document.createElement("LABEL");
    var plate_text = document.createTextNode("Plate: ");
    plate_label.setAttribute("for","plate_input");
    plate_label.appendChild(plate_text);
    f.appendChild(plate_label);

    var arrival = document.createElement("input");
    arrival.setAttribute("type","date");
    arrival.setAttribute("id","arrival_input");
    arrival.setAttribute("class","vehicle_input");
    var arrival_label = document.createElement("LABEL");
    var arrival_text = document.createTextNode("Arrival: ");
    arrival_label.setAttribute("for","arrival_input");
    arrival_label.appendChild(arrival_text);
    f.appendChild(arrival_label);

    var submit_button = document.createElement("input");
    submit_button.type = "button";
    submit_button.id = "submit_button";
    submit_button.value = "Create";

    var delete_button = document.createElement("input");
    delete_button.type = "button";
    delete_button.id = "delete_button";
    delete_button.value = "Delete";

    f.appendChild(space);
    f.appendChild(color);
    f.appendChild(plate);
    f.appendChild(arrival);
    f.appendChild(submit_button);
    f.appendChild(delete_button);

    c.appendChild(f);

    document.getElementById("vehicle_form").insertBefore(color_label,document.getElementById("color_input"));
    document.getElementById("vehicle_form").insertBefore(plate_label,document.getElementById("plate_input"));
    document.getElementById("vehicle_form").insertBefore(arrival_label,document.getElementById("arrival_input"));

    document.getElementById("submit_button").onclick = function() {
        submitVehicle();
    }
    document.getElementById("delete_button").onclick = function() {
        deleteVehicle();
    }
}

function submitVehicle() {
    var space_input;
    var color_input;
    var plate_input;
    var arrival_input;
    var row_code = returnRowCode();

    var arrival;
    var departure;
    var day_limit = 21;

    space_input = document.getElementById("space_input").value;
    space_input = row_code + space_input;
    space_input = space_input.toUpperCase();

    color_input = document.getElementById("color_input").value;
    color_input = color_input.toUpperCase();

    plate_input = document.getElementById("plate_input").value;
    plate_input = plate_input.toUpperCase();

    arrival_input = document.getElementById("arrival_input").value;

    if(localStorage.getItem(space_input) === null) {
        total_div.innerHTML = "INVALID ENTRY";
    }
    else {
        arrival = parseDate(arrival_input);
        departure = parseDate(arrival_input);
        departure.setTime(departure.getTime() + day_limit * 86400000);

        localStorage.setItem(space_input, color_input + "::" + plate_input + "::" + arrival + "::" + departure);

        document.getElementById("space_input").value = "";
        document.getElementById("color_input").value = "";
        document.getElementById("plate_input").value = "";
        document.getElementById("arrival_input").value = "";
        // total_div.innerHTML = "VEHICLE ADDED";
        c.innerHTML = "<br>VEHICLE ADDED<br><br>Loading Current Row...";
        
        total++;
        setTimeout(createRow,1000,returnRow(row_code.slice(-2)),r.innerHTML);
    }
}

function deleteVehicle() {
    var row_code = returnRowCode();
    var space_input = document.getElementById("space_input").value;
    space_input = row_code + space_input;
    space_input = space_input.toUpperCase();
   
    if(localStorage.getItem(space_input) === null) {
        total_div.innerHTML = "INVALID ENTRY";
        return;
    } else if (localStorage.getItem(space_input) !== "X") {
        // total_div.innerHTML = "VEHICLE DELETED";

        localStorage.setItem(space_input,"X");
        document.getElementById("space_input").value = "";

        c.innerHTML = "<br>VEHICLE DELETED<br><br>Loading Current Row...";
        
        total--;
        setTimeout(createRow,1000,returnRow(row_code.slice(-2)),r.innerHTML);
    } else {
        total_div.innerHTML = "ALREADY EMPTY";
    }
}

function createRow(spaces, row) {
    var p;
    var i;

    var row_digits;
    var color;
    var plate;
    var arrival;
    var departure;

    var sliced_array;

    c.innerHTML = "";
    r.innerHTML = row;
    total_div.innerHTML = total;

    for(i = 0, len = spaces.length; i < len; i++) {
        sliced_array = spaces[i].split("::");

        if(sliced_array[1] !== 'X') {
            row_digits = sliced_array[0];
            color = sliced_array[1].toLowerCase();
            plate = sliced_array[2];
            arrival = sliced_array[3];
            departure = sliced_array[4];
            
            p = document.createElement("p");
            p.id = "row" + row_digits;
            p.style.backgroundColor = color;
            if(color === "white" || color === "silver") {
                p.style.color = "black";
            } else {
                p.style.color = "white";
            }
            p.className = "rows";
            p.innerHTML = row_digits + ": " + plate;
            c.appendChild(p);
        } else {
            row_digits = sliced_array[0];
            p = document.createElement("p");
            p.id = "row" + row_digits;
            p.className = "rows";
            p.innerHTML = row_digits + ": " + sliced_array[sliced_array.length-1];
            c.appendChild(p);
        }
    }

    calcDeparture(spaces);
    total_div.innerHTML = returnTotal();
}

function returnRow(space) {
    var new_array = [];
    var sliced_array;
    var row;
    var vehicle;
    var row_digits;
    var color;
    var plate;
    var i;

    for(i = 0, len = localStorage.length; i < len; i++){
        row = localStorage.key(i);
        vehicle = localStorage.getItem(localStorage.key(i));
        row_digits = row.slice(-2);
        if(row.slice(0,-2) === level_num + space) {
            new_array.push(row_digits + '::' + vehicle);
        }
    }
    var sorted_array = new_array.sort();
    return sorted_array;
}

function returnTotal() {
    var count = 0;
    var i;

    for(i = 0, len = localStorage.length; i < len; i++) {
        if(localStorage.getItem(localStorage.key(i)) !== "X") {
            count++;
        }
    }

    return count;
}

function returnRowCode() {
    var row_info = r.innerHTML;
    var row_code;

    if(row_info[row_info.length-3] === "I") {
        row_code = level_num + row_info[0] + row_info[row_info.length-3] + row_info[row_info.length-1];
    } else {
        row_code = level_num + row_info[0] + row_info[row_info.length-1];
    }

    return row_code;
}

function calcDeparture(current_row) {
    var row;
    var row_digits;
    var row_info;
    var row_code = returnRowCode();
    var vehicle;
    var sliced_array;
    var i;

    var departure;
    var today = new Date();
    today.setHours(0,0,0,0);

    for(i = 0, len = current_row.length; i < len; i++) {
        sliced_array = current_row[i].split("::");

        if(sliced_array[1] !== 'X') {
            row_digits = sliced_array[0];
            color = sliced_array[1].toLowerCase();
            plate = sliced_array[2];
            arrival = new Date(sliced_array[3]);
            departure = new Date(sliced_array[4]);

            if(departure < today) {
                console.log("Space: " + row_digits + " is expired.");
                document.getElementById("row" + row_digits).style.textDecoration = "line-through";
            }
        }
    }
}

function saveToFile() {
    var new_array = {};

    for(i = 0; i < localStorage.length; i++) {
        row = localStorage.key(i);
        vehicle = localStorage.getItem(localStorage.key(i));
        new_array[row] = vehicle;
    }

    $.ajax({
        type: "POST",
        url: "saveVehicles.php",
        data: { data: JSON.stringify(new_array) },
        success: function() {
            console.log("Vehicles successfully saved to server.");
            total_div.innerHTML = "Master Written";
        },
        failure: function() {
            console.log("Failed to save to server...");
            total_div.innerHTML = "Master Failed";
        },
        error: function() {
            console.log("Error...");
            total_div.innerHTML = "Master Error";
        }
    });
}

function retrieveMaster() {
    master = {};

    var url = "master.txt";
    var count = 0;
    var flag = false;

    $.getJSON(url,function(data) {
        $.each(data,function(key,val) {
            master[key] = val;
        })

        console.log("MASTER: ",master);
        c.innerHTML = "Loading master data...";

        for(property in master) {
            if(localStorage.getItem(property) !== null) {
                localStorage.setItem(property,master[property]);
                count++;
            } else {
                initRows();
                flag = true;
                break;
            }
        }
        if(flag) {
            retrieveMaster();
        } else {
            console.log("Import complete: " + count + " values set in local storage.");
            total = returnTotal();
            total_div.innerHTML = total;
            c.innerHTML = "Import Complete";
        }
    });
}

function createEmptyRows(row,num) {
    var count = 0;
    var space;
    var limit;

    if(row[0] === "N") {
        limit = 4;
    } else if (row[0] === "S") {
        limit = 5;
    }

    while(parseInt(level_num) <= limit) {
        while(count < num) {
            count++;
            if(count.toString().length === 1) {
                space = level_num + row.toString() + "0" + count;
            } else {
                space = level_num + row.toString() + count;
            }
            localStorage.setItem(space,"X");
        }
        level_num = parseInt(level_num) + 1;
        count = 0;
    }

    level_num = level[level.length - 1];
}

function initRows() {
    if (typeof(Storage) !== "undefined") {
        // NORTH RAMP ---------------------------------------------------------------
        //ROW A - 24 | ROW B - 21 | ROW C - 21 | ROW D - 23 | ROW I-A - 20
        // ROW I-B - 20 | ROW W - 14 | ROW E - 14 | INNER A - 3 | INNER B - 3

        //LEVEL 2 NORTH RAMP --------------------------------------------------------
        //ROW A - 27 | ROW B - 20 | ROW C - 20 | ROW D - 22 | ROW W - 14 | ROW E - 17

        //SOUTH RAMP ----------------------------------------------------------------
        //ROW A - 23 | ROW B - 21 | ROW I-A - 23 | ROW I-B - 21 | ROW W - 6
        //ROW E = 8 | INNER A - 3 | INNER B - 2
        console.log("clearing localstorage object");
        localStorage.clear();
        console.log("filling localstorage object");
        createEmptyRows("NA",24);
        createEmptyRows("NB",21);
        createEmptyRows("NC",21);
        createEmptyRows("ND",23);
        createEmptyRows("NIA",20);
        createEmptyRows("NIB",20);
        createEmptyRows("NW",14);
        createEmptyRows("NE",14);
        createEmptyRows("SA",23);
        createEmptyRows("SB",21);
        createEmptyRows("SIA",23);
        createEmptyRows("SIB",21);
        createEmptyRows("SW",6);
        createEmptyRows("SE",8);

    } else {
        console.log("Sorry! No Web Storage support..")
    }
}

function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<< UNUSED FUNCTIONS BELOW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function checkStorage() {
    var i;

    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

    console.log("session storage");
    for (i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }
}

function sortStorage(){
    var i;
    var sortedArray;
    var localStorageArray;

    if(localStorage.length > 0){
        localStorageArray = [];
        for (i=0;i<localStorage.length;i++){
            localStorageArray[i] = localStorage.key(i)+":"+localStorage.getItem(localStorage.key(i));
        }
    }
    sortedArray = localStorageArray.sort();
    console.log(sortedArray);
    return sortedArray;
}
