import React from "react";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/operations";
import { allContactsSelector } from "../../redux/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(allContactsSelector);

  const handleDelete = (e, name) => {
    if (window.confirm(`Are sure you want to delete ${name} contact?`)) {
      dispatch(deleteTask(e.target.id));
    }
  };

  return (
    <div className={s.container}>
      {allContacts.length > 0 ? (
        <ul className={s.list}>
          {allContacts.map(({ id, name, phone, email, addresses }) => (
            <li key={id} className={s.listItem}>
              <div className={s.info}>
                <p>{name}</p>
                <a href={`tel:${phone}`}>
                  <p>{phone}</p>
                </a>
                <a href={`mailto:${email}`}>
                  <p>{email}</p>
                </a>
              </div>
              <div className={s.address}>
                {addresses.map((addr) => (
                  <p key={addr}>{addr}</p>
                ))}
              </div>
              <button
                id={id}
                className={s.deleteBtn}
                type="button"
                onClick={(e) => handleDelete(e, name)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Add your first contact</p>
      )}
    </div>
  );
};

export default ContactList;
