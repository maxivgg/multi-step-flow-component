import './ReviewOrder.css'

export default function ReviewOrder() {
  return (
    <div className='review-order'>
      <div className="invoice">
        <div className="header">
          <b>Invoice</b>
        </div>

        <div className="item">
          <span>2</span>
          <span>Item 1</span>
          <span>$50.00</span>
        </div>

        <div className="item">
          <span>1</span>
          <span>Item 2</span>
          <span>$30.00</span>
        </div>

        <div className="item">
          <span>3</span>
          <span>Item 3</span>
          <span>$20.00</span>
        </div>

        <div className="item">
          <span></span>
          <span></span>
          <span>Total: $190.00</span>
        </div>
      </div>
    </div>
  );
};

