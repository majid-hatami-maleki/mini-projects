import React, { useContext } from "react";
import "./ExTracker.css";
import AppsHeader from "../../appsHeader/AppsHeader";
import MainContainer from "../../appsContainer/MainContainer";
import { EXTrackerContexts } from "../../../contexts/ExpenseTrackerContext";
export default function ExpenseTracker() {
  const contexts = useContext(EXTrackerContexts);
  console.log(contexts.addNewEvent());
  console.log(contexts.allTransactions);
  let ID = 1;
  const obj1 = [
    {
      id: ID,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 1,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 2,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 3,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 4,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 5,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 6,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 7,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 8,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 9,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 10,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 11,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 12,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
    {
      id: ID + 13,
      date: "23/01/04",
      time: "11:30",
      source: "wallet",
      subject: "buying",
      amount: 100_000,
    },
  ];
  return (
    <MainContainer>
      <AppsHeader class={"Ex-header"} />
      <div className="ExTracker-container">
        <div className="logs-displays">
          <ul className="transactions-table">
            {obj1.map((item) => (
              <li>
                <p className="id">
                  <span>{item.id}</span>
                </p>
                <p className="dateAndTime">
                  <span>{item.date}</span> |<span>{item.time}</span>
                </p>
                <p className="payment-source">
                  <span>{item.source}</span>
                </p>
                <p className="payment-subject">
                  <span>{item.subject}</span>
                </p>
                <p className="payment-amount">
                  <span>{item.amount}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="logs-table-container">
            <div className="panel-infos">
              <h2 className="panel-infos-day-infos">
                <span>date</span> <span>|</span> <span>time</span>
              </h2>
              <h2 className="panel-title">transactions summary</h2>
            </div>
            <ul className="logs-table">
              <li>
                <span>wallet remaining :</span>
                <span>100/000</span>
              </li>
              <li>
                <span>bank remaining :</span>
                <span>100/000</span>
              </li>
              <li>
                <span>all remaining budget :</span>
                <span>200/000</span>
              </li>
              <li>
                <span>total expenses :</span>
                <span>200/000</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="newTransaction-panel">
          <form className="add-transaction-form" onSubmit={e=> e.preventDefault()}>
            <select className="sources-list">
                <option value="default" hidden>source</option>
                <option value="wallet">wallet</option>
                <option value="bank">bank</option>
            </select>
            <input type="text" placeholder="subject..." />
            <input type="number" placeholder="amount..."/>
            <input type="submit" value='done' />
          </form>
        </div>
      </div>
    </MainContainer>
  );
}
