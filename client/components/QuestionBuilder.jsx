/* eslint react/prop-types: 0 */

import React from 'react';
import { Card, CardContent, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AnswerBuilder } from './AnswerBuilder';
// import { useStyles } from '../styles/useStyles';

const useStyles = makeStyles((theme) => ({
  questionCard: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const QuestionBuilder = (props) => {
  const classes = useStyles();
  if (props.questions) {
    console.log(props.questions);

    return (
      <div className={classes.paper}>
        {props.questions.map((question, index) => (
          <Card className={classes.questionCard}>
            <CardContent>
              <Typography variant="h6">Question {index + 1}</Typography>
              <Divider className={classes.divider} variant="fullWidth" />
              <Typography>{question.question}</Typography>
              <AnswerBuilder type={question.type} answers={question.answers} />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <Card>
      <Typography variant="h6">Loading...</Typography>
    </Card>
  );
};