import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../components/shared/MoCard";
import PageHeader from "../../components/shared/PageHeader";
import Spinner from "../../components/shared/Spinner";
import { withAuthentication } from "../../components/Session";

const Questions = ({ firebase, history }) => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);

	const QuestionsList = ({ questions }) =>
		Object.keys(questions).map((question, index) => (
			<Grid key={index} item xs={12} sm={12} md={6}>
				<MoCard topic={questions[question]}></MoCard>
			</Grid>
		));

	useEffect(() => {
		setLoading(true);
		firebase.getQuestions().on("value", snapshot => {
			if (snapshot.val()) {
				const questions = snapshot.val().map(question => ({
					...question,
					url: `/questions/${question.label.replace(/ /g, "-")}`
				}));
				setQuestions(questions);
				setLoading(false);
			} else {
				setQuestions(null);
				setLoading(false);
			}
		});

		return () => firebase.getQuestions().off;
	}, [firebase]);

	return (
		<>
			<PageHeader img="" title="Questions" history={history} />
			<Spinner loading={loading} color="primary" />
			<Grid container spacing={3}>
				<QuestionsList questions={questions} />
			</Grid>
		</>
	);
};
export default withAuthentication(Questions);
