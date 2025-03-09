
function Footer() {
  const deco={
    textDecoration:'none'
  }
  return (
    <>
    <footer class="bg-success text-white py-2">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-4 text-center">
        <h5>Contact Information</h5>
        <p>Address: Reale, Eldoret City, KE 45678</p>
        <p>Phone: (254) 456-7890</p>
        <p>Email: reale@healthcare.com</p>
      </div>
      <div class="col-md-4 col-lg-4 col-sm-4 text-center">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white" style={deco}>Home</a></li>
          <li><a href="#" class="text-white" style={deco}>About Us</a></li>
          <li><a href="#" class="text-white" style={deco}>Doctors</a></li>
          <li><a href="#" class="text-white" style={deco}>Services</a></li>
          <li><a href="#" class="text-white" style={deco}>Contact Us</a></li>
          <li><a href="#" class="text-white" style={deco}>Book a Meeting</a></li>
        </ul>
      </div>
      <div class="col-md-4 col-lg-4 col-sm-4 text-center">
        <h5>Legal</h5>
        <ul class="list-unstyled">
          <li><a href="/privacy-policy" class="text-white" style={deco}>Privacy Policy</a></li>
          <li><a href="/terms-of-service" class="text-white" style={deco}>Terms of Service</a></li>
          <li><a href="/disclaimer" class="text-white" style={deco}>Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-12 text-center">
        <p>© 2025 Healthcare. All rights reserved.</p>
        <div className="container-fluid">
          <a href="https://facebook.com" class="text-white me-2"><i class="fab fa-facebook">Facebook</i></a>
          <a href="https://twitter.com" class="text-white me-2"><i class="fab fa-twitter">Twitter</i></a>
          <a href="https://linkedin.com" class="text-white me-2"><i class="fab fa-linkedin">LinkedIn</i></a>
          <a href="https://instagram.com" class="text-white me-3"><i class="fab fa-instagram">Instagram</i></a>
          <a href="https://tiktok.com" class="text-white"><i class="fab fa-instagram">Tiktok</i></a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
   
  );
}
export default Footer