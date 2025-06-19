import React from "react";
import "../../App.css";
import { BsBookmarkPlus } from "react-icons/bs";
import Button from "./Button";
import LButton from "./LButton";


const tagIcons = ['/Images/bag.png','/Images/clock.png','/Images/wallet.png','/Images/location.png'];

export default function JobCard({
  postedTime = "10 min ago",
  jobTitle,
  companyName,
  logo,
  tags = [],
  buttonLabel = "View Job",
  onButtonClick,
}) {
  return (
    <div className="card job-card p-3 d-flex flex-column flex-md-row justify-content-between align-items-start position-relative">
      <span className="badge bg-light text-success position-absolute top-5 start-7 m-0">
        {postedTime}
      </span>
      <BsBookmarkPlus className="position-absolute top-5 end-8 m-0 text-muted fs-4" />

      <div className="d-flex mt-7">
        <img
          src={logo}
          alt="Company Logo"
          className="w-10 h-10 rounded-full m-3 "
        />

        <div>
          <h5 className="fw-semibold mb-2 text-2xl">{jobTitle}</h5>
          <p className="text-muted text-[14px] mt-2 mb-4">{companyName}</p>

          <div className="d-flex flex-wrap gap-3 text-muted small align-items-center ml-0">
            {tags.map((tag, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <img
                  src={tagIcons[index] || '/Images/bag.png'}
                  alt={`tag-icon-${index}`}
                  style={{
                    width: "22px", // Increase size for heavier look
                    height: "22px",
                    filter: "contrast(1.2) brightness(0.8)", // Optional: make icon look bolder
                  }}
                />
                <LButton label={tag} onClick={onButtonClick} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button label={buttonLabel} onClick={onButtonClick} />
    </div>
  );
}
