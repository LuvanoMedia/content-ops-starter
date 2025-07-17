<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Luvano Media</title>
<style>
  /* Reset and base */
  body, html {
    margin: 0; padding: 0; height: 100%;
    background-color: #000000;
    color: #ffffff;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }

  h1 {
    font-weight: 900;
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  nav {
    margin-top: 2rem;
  }

  .contact-tab {
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    border: 2px solid white;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    display: inline-block;
  }

  .contact-tab:hover {
    background-color: #ffffff;
    color: #000000;
  }

  .contact-info {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  a {
    color: #ffffff;
    text-decoration: underline;
  }

  a:hover {
    color: #cccccc;
  }
</style>
</head>
<body>

  <h1>Luvano Media</h1>

  <nav>
    <div class="contact-tab" onclick="toggleContact()">
      Contact Us
    </div>

    <div id="contact-info" class="contact-info" style="display: none;">
      <p>Email: <a href="mailto:info@luvano.co.za">info@luvano.co.za</a></p>
      <p>Cell: <a href="tel:+27726195277">072 619 5277</a></p>
    </div>
  </nav>

  <script>
    function toggleContact() {
      const info = document.getElementById('contact-info');
      if (info.style.display === 'none') {
        info.style.display = 'block';
      } else {
        info.style.display = 'none';
      }
    }
  </script>

</body>
</html>
