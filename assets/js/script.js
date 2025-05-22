"use strict";
$(document).ready(function() {
    // card js start
    $(".card-header-right .close-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').animate({
            'opacity': '0',
            '-webkit-transform': 'scale3d(.3, .3, .3)',
            'transform': 'scale3d(.3, .3, .3)'
        });

        setTimeout(function() {
            $this.parents('.card').remove();
        }, 800);
    });
    $(".card-header-right .reload-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').addClass("card-load");
        $this.parents('.card').append('<div class="card-loader"><i class="fa fa-spinner rotate-refresh"></div>');
        setTimeout(function() {
            $this.parents('.card').children(".card-loader").remove();
            $this.parents('.card').removeClass("card-load");
        }, 3000);
    });
    $(".card-header-right .card-option .open-card-option").on('click', function() {
        var $this = $(this);
        if ($this.hasClass('fa-times')) {
            $this.parents('.card-option').animate({
                'width': '30px',
            });
            $(this).removeClass("fa-times").fadeIn('slow');
            $(this).addClass("fa-wrench").fadeIn('slow');
        } else {
            $this.parents('.card-option').animate({
                'width': '140px',
            });
            $(this).addClass("fa-times").fadeIn('slow');
            $(this).removeClass("fa-wrench").fadeIn('slow');
        }
    });
    $(".card-header-right .minimize-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-block').slideToggle();
        $(this).toggleClass("fa-minus").fadeIn('slow');
        $(this).toggleClass("fa-plus").fadeIn('slow');
    });
    $(".card-header-right .full-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        port.toggleClass("full-card");
        $(this).toggleClass("fa-window-restore");
    });

    $(".card-header-right .icofont-spinner-alt-5").on('mouseenter mouseleave', function() {
        $(this).toggleClass("rotate-refresh").fadeIn('slow');
    });
    $("#more-details").on('click', function() {
        $(".more-details").slideToggle(500);
    });
    $(".mobile-options").on('click', function() {
        $(".navbar-container .nav-right").slideToggle('slow');
    });
    $(".search-btn").on('click', function() {
        $(".main-search").addClass('open');
        $('.main-search .form-control').animate({
            'width': '200px',
        });
    });
    $(".search-close").on('click', function() {
        $('.main-search .form-control').animate({
            'width': '0',
        });
        setTimeout(function() {
            $(".main-search").removeClass('open');
        }, 300);
    });
    // $(".header-notification").on('click', function() {
    //     $(this).children('.show-notification').slideToggle(500);
    //     $(this).toggleClass('active');
    //
    // });

    $(document).ready(function(){
        $(".header-notification").click(function(){
            $(this).find(".show-notification").slideToggle(500);
            $(this).toggleClass('active');
        });
    });
    $(document).on("click", function(event){
        var $trigger = $(".header-notification");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".show-notification").slideUp(300);
            $(".header-notification").removeClass('active');
        }
    });

    // card js end
    $.mCustomScrollbar.defaults.axis = "yx";
    $("#styleSelector .style-cont").slimScroll({
        setTop: "1px",
        height:"calc(100vh - 520px)",
    });
    $(".main-menu").mCustomScrollbar({
        setTop: "1px",
        setHeight: "calc(100% - 56px)",
    });
    /*chatbar js start*/
    /*chat box scroll*/
    var a = $(window).height() - 80;
    $(".main-friend-list").slimScroll({
        height: a,
        allowPageScroll: false,
        wheelStep: 5,
        color: '#1b8bf9'
    });

    // search
    $("#search-friends").on("keyup", function() {
        var g = $(this).val().toLowerCase();
        $(".userlist-box .media-body .chat-header").each(function() {
            var s = $(this).text().toLowerCase();
            $(this).closest('.userlist-box')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
        });
    });

    // open chat box
    $('.displayChatbox').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.showChat').toggle('slide', options, 500);
    });

    //open friend chat
    $('.userlist-box').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.showChat_inner').toggle('slide', options, 500);
    });
    //back to main chatbar
    $('.back_chatBox').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.showChat_inner').toggle('slide', options, 500);
        $('.showChat').css('display', 'block');
    });
    $('.back_friendlist').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.p-chat-user').toggle('slide', options, 500);
        $('.showChat').css('display', 'block');
    });
    // /*chatbar js end*/

    $('[data-toggle="tooltip"]').tooltip();

    // wave effect js
    Waves.init();
    Waves.attach('.flat-buttons', ['waves-button']);
    Waves.attach('.float-buttons', ['waves-button', 'waves-float']);
    Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
    Waves.attach('.flat-buttons', ['waves-button', 'waves-float', 'waves-light', 'flat-buttons']);
});
$(document).ready(function() {
    $(".theme-loader").animate({
        opacity: "0"
    },1000);
    setTimeout(function() {
        $(".theme-loader").remove();
    }, 800);
});

// toggle full screen
function toggleFullScreen() {
    var a = $(window).height() - 10;

    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}


// Modified lead management script with newest/oldest filter
document.addEventListener('DOMContentLoaded', function() {
  const addLeadModal = new bootstrap.Modal(document.getElementById('addLeadModal'));

  const slider = document.querySelector('.lead-slider');
  const backdrop = document.querySelector('.lead-slider-backdrop');
  const closeBtn = document.querySelector('.lead-slider-close');
  const statusSelect = document.getElementById('leadStatusSelect');
  const locationInput = document.getElementById('leadLocationInput');
  const noteInput = document.getElementById('noteInput');
  const addNoteBtn = document.getElementById('addNoteBtn');
  const saveDetailsBtn = document.getElementById('saveDetailsBtn');
  const statusFilter = document.getElementById('statusFilter');
  const dateFilter = document.getElementById('dateFilter'); // New date filter element
  const searchInput = document.querySelector('.search-bar');
  const leadForm = document.getElementById('leadForm');
  const tableBody = document.querySelector('#leadsTable tbody'); // Get table body reference

  let currentLead = null;
  let currentSort = 'newest'; // Default sort order

  // Initialize and load leads data
  function initializeLeadsData() {
    let leadsData = localStorage.getItem('leadsData');
    
    if (leadsData) {
      leadsData = JSON.parse(leadsData);
      
      // Clear existing table rows to avoid duplicates
      tableBody.innerHTML = '';
      
      // Render all leads from localStorage to the table
      renderLeadsTable(leadsData);
      
      return leadsData;
    }

    // If no data in localStorage, initialize from existing table
    leadsData = {};
    document.querySelectorAll('#leadsTable tbody tr').forEach((row) => {
      const email = row.querySelector('td:nth-child(3)').textContent.trim();
      leadsData[email] = createLeadObjectFromRow(row);
    });

    saveLeadsDataToLocalStorage(leadsData);
    return leadsData;
  }

  function createLeadObjectFromRow(row) {
    return {
      name: row.querySelector('td:nth-child(2)').textContent.trim(),
      email: row.querySelector('td:nth-child(3)').textContent.trim(),
      phone: row.querySelector('td:nth-child(4)').textContent.trim(),
      altPhone: "",
      business: "",
      location: row.querySelector('td:nth-child(5)').textContent.trim(),
      source: row.querySelector('td:nth-child(6)').textContent.trim(),
      status: row.querySelector('td:nth-child(7) span').textContent.trim(),
      createdAt: row.querySelector('td:nth-child(1)').textContent.trim(),
      notes: []
    };
  }

  function getLeadsData() {
    return JSON.parse(localStorage.getItem('leadsData')) || {};
  }

  function saveLeadsDataToLocalStorage(data) {
    localStorage.setItem('leadsData', JSON.stringify(data));
  }

  function updateLeadInStorage(email, updatedData) {
    const leadsData = getLeadsData();
    leadsData[email] = { ...leadsData[email], ...updatedData };
    saveLeadsDataToLocalStorage(leadsData);
  }

  function addNoteToLead(email, note) {
    const leadsData = getLeadsData();
    if (!leadsData[email].notes) leadsData[email].notes = [];
    leadsData[email].notes.push(note);
    saveLeadsDataToLocalStorage(leadsData);
  }

  function addLeadToTable(lead) {
    const newRow = document.createElement('tr');
    newRow.setAttribute('data-status', lead.status);
    // Parse the date and set the timestamp for sorting
    let createDate = new Date();
    try {
      createDate = new Date(lead.createdAt);
      if (isNaN(createDate.getTime())) {
        // Fallback for different date formats
        const parts = lead.createdAt.split(' at ');
        if (parts.length > 1) {
          const datePart = parts[0];
          const timePart = parts[1];
          createDate = new Date(`${datePart} ${timePart}`);
        }
      }
    } catch (e) {
      console.error("Error parsing date:", lead.createdAt);
    }
    
    newRow.setAttribute('data-created', createDate.getTime());
    const statusClass = getStatusClass(lead.status);

    newRow.innerHTML = `
      <td>${lead.createdAt || new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</td>
      <td><a href="#" class="lead-name-link" style="color: #25d366; text-decoration: none; font-weight: 500;">${lead.name}</a></td>
      <td>${lead.email}</td>
      <td>${lead.phone}</td>
      <td>${lead.location}</td>
      <td>${lead.source}</td>
      <td><span class="badge ${statusClass} status-badge">${lead.status}</span></td>
      <td>
        <i class="bi bi-whatsapp whatsapp-icon"></i>
        <i class="bi bi-chat-left-text chat-icon"></i>
      </td>
    `;
    
    tableBody.appendChild(newRow);
    
    // Attach event listeners to the new row
    newRow.querySelector('.whatsapp-icon').addEventListener('click', function() {
      openWhatsApp(lead.phone);
    });
    
    newRow.querySelector('.chat-icon').addEventListener('click', function(e) {
      e.preventDefault();
      openSlider(lead.email);
    });
    
    newRow.querySelector('.lead-name-link').addEventListener('click', function(e) {
      e.preventDefault();
      openSlider(lead.email);
    });
  }

  // New function to render leads table with sorting
  function renderLeadsTable(leadsData) {
    // Clear existing table rows
    tableBody.innerHTML = '';
    
    // Convert object to array for sorting
    const leadsArray = Object.values(leadsData);
    
    // Sort the array based on currentSort value
    leadsArray.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      
      if (currentSort === 'newest') {
        return dateB - dateA; // Newest first
      } else {
        return dateA - dateB; // Oldest first
      }
    });
    
    // Add sorted leads to table
    leadsArray.forEach(lead => {
      addLeadToTable(lead);
    });
    
    // Apply any current filters
    if (statusFilter.value !== 'all') {
      filterByStatus();
    }
    
    if (searchInput.value.trim() !== '') {
      searchLeads();
    }
  }

  // Function to handle date filter change
  function handleDateFilterChange(value) {
    currentSort = value;
    const visibleStatus = statusFilter.value;
    
    // Get all rows
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    
    // Filter visible rows based on current status filter and search term
    const visibleRows = rows.filter(row => {
      const matchesStatus = visibleStatus === 'all' || row.getAttribute('data-status') === visibleStatus;
      const searchTerm = searchInput.value.toLowerCase();
      const matchesSearch = searchTerm === '' || row.textContent.toLowerCase().includes(searchTerm);
      return matchesStatus && matchesSearch;
    });
    
    // Sort the visible rows
    visibleRows.sort((a, b) => {
      const timeA = parseInt(a.getAttribute('data-created')) || 0;
      const timeB = parseInt(b.getAttribute('data-created')) || 0;
      
      if (currentSort === 'newest') {
        return timeB - timeA;
      } else {
        return timeA - timeB;
      }
    });
    
    // Temporarily hide all rows
    rows.forEach(row => {
      row.style.display = 'none';
    });
    
    // Show sorted visible rows in correct order
    visibleRows.forEach(row => {
      row.style.display = '';
      tableBody.appendChild(row); // This moves the row to the end, effectively reordering
    });
  }

  function openSlider(leadEmail) {
    currentLead = leadEmail;
    const lead = getLeadsData()[leadEmail];

    if (lead) {
      document.getElementById('leadName').textContent = lead.name;
      document.getElementById('leadEmail').textContent = lead.email;
      document.getElementById('leadPhone').textContent = lead.phone;
      document.getElementById('leadAltPhoneInput').value = lead.altPhone || '';
      document.getElementById('leadBusinessInput').value = lead.business || '';
      document.getElementById('leadStatusSelect').value = lead.status;
      document.getElementById('leadLocationInput').value = lead.location;
      renderTimeline(lead.notes);
    }

    slider.classList.add('open');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeSlider() {
    slider.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
    currentLead = null;
  }

  function renderTimeline(notes) {
    const container = document.getElementById('timelineContainer');
    container.innerHTML = '';

    if (!notes || notes.length === 0) {
      container.innerHTML = '<p class="text-muted">No interactions recorded yet.</p>';
      return;
    }

    const sortedNotes = [...notes].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    sortedNotes.forEach(note => {
      const date = new Date(note.timestamp);
      const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-date">${formattedDate}</div>
        <div class="timeline-content">
          ${note.text || 'Details updated'}
          ${note.statusChange ? `<div class="mt-2"><strong>Status changed to:</strong> ${note.statusChange}</div>` : ''}
          ${note.locationChange ? `<div class="mt-2"><strong>Location updated to:</strong> ${note.locationChange}</div>` : ''}
          ${note.altPhoneChange ? `<div class="mt-2"><strong>Alternative Phone updated to:</strong> ${note.altPhoneChange}</div>` : ''}
          ${note.businessChange ? `<div class="mt-2"><strong>Working/Business updated to:</strong> ${note.businessChange}</div>` : ''}
        </div>
      `;
      container.appendChild(timelineItem);
    });
  }

  function addNote() {
    if (!currentLead) return;

    const noteText = noteInput.value.trim();
    if (!noteText) {
      alert('Please enter a note');
      return;
    }

    const lead = getLeadsData()[currentLead];
    const newStatus = statusSelect.value;
    const newLocation = locationInput.value.trim();
    const newAltPhone = document.getElementById('leadAltPhoneInput').value.trim();
    const newBusiness = document.getElementById('leadBusinessInput').value.trim();

    const note = { text: noteText, timestamp: new Date().toISOString() };
    const changesMade = trackChanges(lead, note, newStatus, newLocation, newAltPhone, newBusiness);

    if (changesMade) {
      updateLeadInStorage(currentLead, {
        status: newStatus,
        location: newLocation,
        altPhone: newAltPhone,
        business: newBusiness
      });
    }

    addNoteToLead(currentLead, note);
    renderTimeline(getLeadsData()[currentLead].notes);
    noteInput.value = '';
  }

  function saveLeadDetails() {
    if (!currentLead) return;

    const lead = getLeadsData()[currentLead];
    const newStatus = statusSelect.value;
    const newLocation = locationInput.value.trim();
    const newAltPhone = document.getElementById('leadAltPhoneInput').value.trim();
    const newBusiness = document.getElementById('leadBusinessInput').value.trim();

    const note = { timestamp: new Date().toISOString() };
    const changesMade = trackChanges(lead, note, newStatus, newLocation, newAltPhone, newBusiness);

    if (changesMade) {
      updateLeadInStorage(currentLead, {
        status: newStatus,
        location: newLocation,
        altPhone: newAltPhone,
        business: newBusiness
      });
      addNoteToLead(currentLead, note);
      renderTimeline(getLeadsData()[currentLead].notes);
      alert('Lead details saved successfully!');
    } else {
      alert('No changes detected to save.');
    }
  }

  function trackChanges(lead, note, newStatus, newLocation, newAltPhone, newBusiness) {
    let changesMade = false;

    if (newStatus !== lead.status) {
      note.statusChange = newStatus;
      changesMade = true;
      updateStatusInTable(lead.email, newStatus);
    }

    if (newLocation !== lead.location) {
      note.locationChange = newLocation;
      changesMade = true;
      updateLocationInTable(lead.email, newLocation);
    }

    if (newAltPhone !== (lead.altPhone || '')) {
      note.altPhoneChange = newAltPhone;
      changesMade = true;
    }

    if (newBusiness !== (lead.business || '')) {
      note.businessChange = newBusiness;
      changesMade = true;
    }

    return changesMade;
  }

  function updateStatusInTable(email, newStatus) {
    const row = findLeadRowByEmail(email);
    if (row) {
      const badge = row.querySelector('td:nth-child(7) span');
      badge.textContent = newStatus;
      badge.className = 'badge status-badge ' + getStatusClass(newStatus);
      row.setAttribute('data-status', newStatus);
    }
  }

  function updateLocationInTable(email, newLocation) {
    const row = findLeadRowByEmail(email);
    if (row) row.querySelector('td:nth-child(5)').textContent = newLocation;
  }

  function findLeadRowByEmail(email) {
    return Array.from(document.querySelectorAll('#leadsTable tbody tr'))
      .find(row => row.querySelector('td:nth-child(3)').textContent.trim() === email);
  }

  function openWhatsApp(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (/^[6-9]\d{9}$/.test(cleaned)) {
      window.open(`https://wa.me/+91${cleaned}`, '_blank');
    } else {
      alert('Please provide a valid 10-digit Indian mobile number (starts with 6,7,8, or 9)');
    }
  }

  function filterByStatus() {
    const status = statusFilter.value;
    document.querySelectorAll('#leadsTable tbody tr').forEach(row => {
      row.style.display = status === 'all' || row.getAttribute('data-status') === status ? '' : 'none';
    });
    
    // Re-apply current sort after filtering
    handleDateFilterChange(currentSort);
  }

  function searchLeads() {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll('#leadsTable tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
    });
  }

  function getStatusClass(status) {
    switch (status.toLowerCase()) {
      case 'new lead': return 'bg-primary';
      case 'contacted': return 'bg-warning text-dark';
      case 'qualified': return 'bg-info text-white' ;
      case 'lead won': return 'bg-success';
      case 'not reachable': return 'bg-dark';
      case 'lead lost': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  function handleLeadFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const status = document.getElementById('status').value.trim();
    const source = document.getElementById('source').value.trim();

    if (!name || !email || !phone || !location || !status || !source) {
      alert('All fields are required.');
      return;
    }

    // Check if lead with this email already exists
    const leadsData = getLeadsData();
    if (leadsData[email]) {
      alert('A lead with this email already exists!');
      return;
    }

    const now = new Date();
    const dateTime = now.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
    
    // Create lead object
    const newLead = {
      name,
      email,
      phone,
      altPhone: "",
      business: "",
      location,
      source,
      status,
      createdAt: dateTime,
      notes: []
    };
    
    // Add to storage
    const updatedLeadsData = getLeadsData();
    updatedLeadsData[email] = newLead;
    saveLeadsDataToLocalStorage(updatedLeadsData);
    
    // If sort is set to newest first, add to top of table
    if (currentSort === 'newest') {
      // Add directly to table at top position
      const newRow = document.createElement('tr');
      newRow.setAttribute('data-status', newLead.status);
      newRow.setAttribute('data-created', now.getTime());
      const statusClass = getStatusClass(newLead.status);

      newRow.innerHTML = `
        <td>${dateTime}</td>
        <td><a href="#" class="lead-name-link" style="color: #25d366; text-decoration: none; font-weight: 500;">${name}</a></td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${location}</td>
        <td>${source}</td>
        <td><span class="badge ${statusClass} status-badge">${status}</span></td>
        <td>
          <i class="bi bi-whatsapp whatsapp-icon"></i>
          <i class="bi bi-chat-left-text chat-icon"></i>
        </td>
      `;
      
      // Insert at the beginning of the table
      if (tableBody.firstChild) {
        tableBody.insertBefore(newRow, tableBody.firstChild);
      } else {
        tableBody.appendChild(newRow);
      }
      
      // Attach event listeners to the new row
      newRow.querySelector('.whatsapp-icon').addEventListener('click', function() {
        openWhatsApp(phone);
      });
      
      newRow.querySelector('.chat-icon').addEventListener('click', function(e) {
        e.preventDefault();
        openSlider(email);
      });
      
      newRow.querySelector('.lead-name-link').addEventListener('click', function(e) {
        e.preventDefault();
        openSlider(email);
      });
    } else {
      // For oldest first, re-render the whole table to ensure correct order
      renderLeadsTable(updatedLeadsData);
    }
    
    // Reset form and close modal
    leadForm.reset();
    addLeadModal.hide();
  }

  // Initialize leads data and set up event listeners
  let leadsData = initializeLeadsData();

  // Attach event listeners
  closeBtn.addEventListener('click', closeSlider);
  backdrop.addEventListener('click', closeSlider);
  addNoteBtn.addEventListener('click', addNote);
  saveDetailsBtn.addEventListener('click', saveLeadDetails);
  noteInput.addEventListener('keydown', e => { 
    if (e.key === 'Enter' && !e.shiftKey) { 
      e.preventDefault(); 
      addNote(); 
    } 
  });
  
  statusFilter.addEventListener('change', filterByStatus);
  dateFilter.addEventListener('change', function() {
    handleDateFilterChange(this.value);
  });
  searchInput.addEventListener('input', searchLeads);
  leadForm.addEventListener('submit', handleLeadFormSubmit);

  // Set initial sort order to newest
  handleDateFilterChange('newest');

  // Export functions for testing or external use
  window.leadsManager = {
    getLeadsData,
    addLeadToTable,
    openSlider,
    sortLeads: handleDateFilterChange,
    clearAllData: function() {
      if (confirm('Are you sure you want to delete all leads data? This cannot be undone.')) {
        localStorage.removeItem('leadsData');
        tableBody.innerHTML = '';
        alert('All leads data has been cleared.');
      }
    }
  };
});