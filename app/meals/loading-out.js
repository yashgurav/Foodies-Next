"use server";
import classes from "./loading.module.css";

export default async function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
