import "./Input.scss";

export const OutlinedInput = (props) => {
  const { label } = props;
  const { type } = props;
  const { mb } = props;
  const { mb2 } = props;
  return (
    <div className={`out-inp-cont ${mb2}`}>
      <p className={`ds-p ${mb}`}>{label}</p>
      <input type={type} />
    </div>
  );
};

export const TextareaInput = (props) => {
  const { label } = props;
  const { type } = props;
  const { mb } = props;
  const { mb2 } = props;
  return (
    <div className={`out-inp-cont ${mb2}`}>
      <p className={`ds-p ${mb}`}>{label}</p>
      {/* <textarea type={type} /> */}
      <textarea name="okey" rows="7"></textarea>
    </div>
  );
};
