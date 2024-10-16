import Image from "next/image";
import Tips from "@/app/public/Tips.jpg";
import Exercise from "@/app/public/Exercise.jpg";
import fitness from "@/app/public/fitness.jpg";
import workout from "@/app/public/workout.jpg";
import mental from "@/app/public/mental.jpg";
import community from "@/app/public/community.jpg";
import Link from "next/link";

export default function Home() { 
  return (
    <div>
      {[
        {
          image: Exercise,
          alt: "Top 5 Benefits of Regular Exercise",
          title: "Top 5 Benefits of Regular Exercise",
          href: "/Top-5-Benefits-of-Regular-Exercise",
        },
        {
          image: Tips,
          alt: "Fitness Tips",
          title: "Fitness Tips and Guides",
         href: "/Fitness-Tips",
        },
        {
          image: fitness,
          alt: "Fitness Challenges",
         title: "Fitness Challenges",
           href: "/Fitness-Challenges",
        },
        {
          image: workout,
          alt: "Workout Variations",
          title: "Workout Variations",
          href: "/Workout-Variations",
        },
        {
          image: mental,
          alt: "Mental Health and Wellness",
      title: "Mental Health and Wellness",
      href: "/Mental-Health-and-Wellness",
        },
        {
          image: community,
          alt: "Community and Events",
          title: "Community and Events",
          href: "/Community-and-Events",
        }
      ].map(({ image, alt, title, href }) => (
        <div className="parent-container" key={title}>
          <div className="child-container">
            <Image src={image} alt={alt} />
          </div>
          <div className="content">
            <Link href={href} passHref>
              <button className="read-more-button">Read More</button>
            </Link>
            <h1>{title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
