<?php

  $data = array(
    'title' => 'Product Releases',
    'currentCycle' => array(
      'heading' => 'FY16 September',
      'endDate' => '2015-09-25',
      'releases' => array(
        array(
          'description' => 'Improve discoverability of key integrations',
          'pm' => 'philo',
          'team' => 'automation',
          'done' => TRUE
        ),
        array(
          'description' => 'Trigger workflows when importing contacts',
          'pm' => 'clarev',
          'team' => 'contacts',
          'done' => TRUE
        ),
        array(
          'description' => 'Trigger workflows through ad-hoc segments',
          'pm' => 'benh',
          'team' => 'emailbuilder',
          'done' => TRUE
        ),
        array(
          'description' => 'Moving the needle',
          'pm' => 'benh',
          'team' => 'growth',
          'done' => FALSE
        ),
        array(
          'description' => 'Moving the needle',
          'pm' => 'benh',
          'team' => 'growth',
          'done' => FALSE
        ),
        array(
          'description' => 'Moving the needle',
          'pm' => 'benh',
          'team' => 'growth',
          'done' => FALSE
        ),
        array(
          'description' => 'Moving the needle',
          'pm' => 'benh',
          'team' => 'growth',
          'done' => FALSE
        ),
        array(
          'description' => 'Moving the needle',
          'pm' => 'benh',
          'team' => 'growth',
          'done' => FALSE
        ),
        array(
          'description' => 'Moving the needle',
          'pm' => 'benh',
          'team' => 'growth',
          'done' => FALSE
        )
      )
    ),
    'previousCycle' => array(
      'heading' => 'FY16 August',
      'releases' => array(
        array(
          'description' => 'Improve discoverability of key integrations',
          'done' => TRUE
        ),
        array(
          'description' => 'Trigger workflows when importing contacts',
          'done' => TRUE
        ),
        array(
          'description' => 'Trigger workflows through ad-hoc segments',
          'done' => TRUE
        )
      )
    ),
    'nextCycle' => array(
      'heading' => 'FY16 October',
      'releases' => array(
        array(
          'description' => 'Improve discoverability of key integrations',
        ),
        array(
          'description' => 'Trigger workflows when importing contacts',
        ),
        array(
          'description' => 'Trigger workflows through ad-hoc segments',
        )
      )
    )
  );


  // Returns days left to a specific date
  date_default_timezone_set('Australia/Sydney'); // This appears to be an issue w/ Maverick's PHP
  function days_until($date){
    return (isset($date)) ? floor((strtotime($date) - time())/60/60/24) : FALSE;
  }


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title><?php echo $data['title']; ?></title>
  <link rel="stylesheet" href="_assets/css/main.css">
</head>
<body style="zoom: 1;">
  <main class="main">
    <h1 class="heading heading--primary heading--mb-large"><?php echo $data['title']; ?></h1>
    <section class="section section--main">
      <h2 class="heading heading--secondary heading--mb-large"><?php echo $data['currentCycle']['heading']; ?></h2>
      <ul class="legend">
        <li class="legend__item">
          <span class="avatar avatar--automation avatar--legend"></span>
          <span>Automation</span>
        </li>
        <li class="legend__item">
          <span class="avatar avatar--emailbuilder avatar--legend"></span>
          <span>Email Builder</span>
        </li>
        <li class="legend__item">
          <span class="avatar avatar--contacts avatar--legend"></span>
          <span>Contacts</span>
        </li>
        <li class="legend__item">
          <span class="avatar avatar--growth avatar--legend"></span>
          <span>Growth</span>
        </li>
      </ul>
      <ul class="list">
        <?php
          $totalReleasesDone = 0;
          for ($i=0; $i < count($data['currentCycle']['releases']); $i++) {
            ?>
            <li class="list__item list__item--large <?php if($data['currentCycle']['releases'][$i]['done']) echo 'list__item--done'; ?>">
              <span class="avatar avatar--<?php echo $data['currentCycle']['releases'][$i]['team']; ?> avatar--<?php echo $data['currentCycle']['releases'][$i]['pm']; ?>"></span>
              <span class="list__item__desc"><?php echo $data['currentCycle']['releases'][$i]['description']; ?></span>
              <span class="tick tick--large <?php if($data['currentCycle']['releases'][$i]['done']) echo 'tick--done'; ?>"></span>
            </li>
            <?php

            $totalReleases = count($data['currentCycle']['releases']);

            if($data['currentCycle']['releases'][$i]['done']) {
              $totalReleasesDone = $totalReleasesDone + 1;
            }
          }
        ?>
      </ul>
    </section>
    <section class="section section--secondary section--days">
      <h2 class="heading heading--secondary heading--mb-large">Days left</h2>
      <div class="countdown"><?php echo days_until($data['currentCycle']['endDate']); ?></div>
    </section>
    <section class="section section--secondary">
      <h2 class="heading heading--secondary heading--mb-large"><?php echo $data['previousCycle']['heading']; ?></h2>
      <ul class="list">
        <?php
          for ($i=0; $i < count($data['previousCycle']['releases']); $i++) {
            ?>
            <li class="list__item <?php if($data['previousCycle']['releases'][$i]['done']) echo 'list__item--done'; ?>">
              <span class="list__item__desc"><?php echo $data['previousCycle']['releases'][$i]['description']; ?></span>
              <span class="tick <?php if($data['previousCycle']['releases'][$i]['done']) echo 'tick--done'; ?>"></span>
            </li>
            <?php
          }
        ?>
      </ul>
    </section>
    <section class="section section--secondary section--progress">
      <h2 class="heading heading--secondary heading--mb-large">Progress</h2>
      <canvas id="progress" class="progress"></canvas>
    </section>
    <section class="section section--secondary">
      <h2 class="heading heading--secondary heading--mb-large"><?php echo $data['nextCycle']['heading']; ?></h2>
      <ul class="list">
        <?php
          for ($i=0; $i < count($data['nextCycle']['releases']); $i++) {
            ?>
            <li class="list__item <?php if($data['nextCycle']['releases'][$i]['done']) echo 'list__item--done'; ?>">
              <span class="list__item__desc"><?php echo $data['nextCycle']['releases'][$i]['description']; ?></span>
              <span class="tick <?php if($data['nextCycle']['releases'][$i]['done']) echo 'tick--done'; ?>"></span>
            </li>
            <?php
          }
        ?>
      </ul>
    </section>
  </main>

  <script src="_assets/js/Chart.min.js"></script>
  <script>
    var data = [
        {
          value: <?php echo $totalReleasesDone; ?>,
          color:"#19a9e5"
        },
        {
          value: <?php echo ($totalReleases - $totalReleasesDone); ?>,
          color: "#4f545c"
        }
      ];
    var ctx = document.getElementById('progress').getContext('2d');
    var progressChart = new Chart(ctx).Doughnut(data, {
      segmentShowStroke: false,
    });
  </script>
</body>
</html>
