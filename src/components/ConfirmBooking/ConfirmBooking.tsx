import './ConfirmBooking.css'

export default function ConfirmBooking() {
  return (
    <div className="confirm-booking">
      <div className="order-summary">
        <div className="header">
          <b>Order Summary</b>
        </div>

        <div className="item">
          <span>Item 1</span>
          <span>$50.00</span>
        </div>

        <div className="item">
          <span>Item 2</span>
          <span>$30.00</span>
        </div>

        <div className="item">
          <span>Item 3</span>
          <span>$20.00</span>
        </div>

        <div className="item">
          <span>Total:</span>
          <span>$100.00</span>
        </div>
      </div>
    </div>
  );
};

