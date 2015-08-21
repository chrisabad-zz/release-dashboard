<?php

  // possible values for pm: philo, clarev, benh
  // possible values for team: automation, contacts, emailbuilder, growth

  $data = array(
    'title' => 'Product Releases',
    'currentCycle' => array(
      'heading' => 'FY16 September',
      'endDate' => '2015-09-25',
      'releases' => array(
        array(
          'description' => 'More flexible master template',
          'pm' => 'benh',
          'team' => 'emailbuilder',
          'done' => FALSE
        ),
        array(
          'description' => 'Campaign Monitor for Wordpress',
          'pm' => 'mercers',
          'team' => 'automation',
          'done' => FALSE
        ),
        array(
          'description' => 'Reports at a segment level',
          'pm' => 'clarev',
          'team' => 'contacts',
          'done' => FALSE
        ),
        array(
          'description' => 'Premier plan',
          'pm' => 'neals',
          'team' => 'growth',
          'done' => FALSE
        ),
        array(
          'description' => 'Reducing the price for subscriber tiers',
          'pm' => 'neals',
          'team' => 'growth',
          'done' => FALSE
        ),
        array(
          'description' => 'GetFeedback integration',
          'pm' => 'benh',
          'team' => 'emailbuilder',
          'done' => FALSE
        ),
        array(
          'description' => 'Add new marginal rates for credit purchases',
          'pm' => 'neals',
          'team' => 'growth',
          'done' => FALSE
        )
      )
    ),
    'previousCycle' => array(
      'heading' => 'FY16 August',
      'releases' => array(
        array(
          'description' => 'Font folor control',
          'done' => TRUE
        ),
        array(
          'description' => 'Background color control per layout section',
          'done' => TRUE
        ),
        array(
          'description' => 'Reduced spacing in templates',
          'done' => TRUE
        ),
        array(
          'description' => 'Button color control',
          'done' => TRUE
        ),
        array(
          'description' => 'Transactional for marketers',
          'done' => TRUE
        ),
        array(
          'description' => 'Font size control',
          'done' => FALSE
        ),
        array(
          'description' => 'Font size control',
          'done' => FALSE
        ),
        array(
          'description' => 'Redesign the getting started page',
          'done' => FALSE
        ),
        array(
          'description' => 'Background image control per layout section',
          'done' => FALSE
        ),
        array(
          'description' => 'Highlight transactional tab',
          'done' => FALSE
        ),
        array(
          'description' => 'Font face selection',
          'done' => FALSE
        ),
        array(
          'description' => 'Background image control for email background',
          'done' => FALSE
        ),
        array(
          'description' => 'Allow users to skip the "send a test" page',
          'done' => FALSE
        ),
        array(
          'description' => 'Users exceed their limit',
          'done' => FALSE
        ),
        array(
          'description' => 'Buying in-app',
          'done' => FALSE
        ),
        array(
          'description' => '2-step signup process',
          'done' => FALSE
        )
      )
    ),
    'nextCycle' => array(
      'heading' => 'FY16 October',
      'releases' => array(
        array(
          'description' => 'Export HTML',
        ),
        array(
          'description' => 'Custom code in templates',
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
